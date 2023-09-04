from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from main.models import Order,ShippingAddress,Product,OrderItem

from main.serlializable import OrderSerializer
from datetime import datetime

import jwt
import requests
import json

def read_token(token):
    cognito_metadata_url = "https://cognito-idp.us-east-2.amazonaws.com/us-east-2_osUfWewiC/.well-known/jwks.json"
    response = requests.get(cognito_metadata_url)
    jwks_data = response.json()

    header = jwt.get_unverified_header(token)
    key_id = header['kid']

    public_keys = {}
    for key in jwks_data['keys']:
        if key['kid'] == key_id:
            public_keys[key_id] = jwt.algorithms.RSAAlgorithm.from_jwk(json.dumps(key))

    decoded_payload = jwt.decode(token, public_keys[key_id], algorithms=["RS256"], audience="63f1ft2k9kj462locrqosmj5u4")
    return decoded_payload['email']
    

@api_view(['POST'])
def addOrderItem(request):
    try:
        email = read_token(request.headers.get('Authorization'))
        data  = request.data['body']['order']
        orderItems = data['orderItems']

        if orderItems and len(orderItems) == 0 or not orderItems:
            return Response({'detail':'No order Items'},status=400) 
    
        order = Order(
            user_email = email, 
            paymentMethod = data['paymentMethod'], 
            shippingPrice = data['shippingPrice'],
            totalPrice = data['totalPrice']
        )
        order.save()

        shipping = ShippingAddress(
            order = order,
            address = data['shippingAddress']['address'],
            department = data['shippingAddress']['department'],
            municipality = data['shippingAddress']['municipality']
        )
        shipping.save()

        for i in orderItems:
            product = Product.objects.get(id = i['product'])
            item = OrderItem(
                product = product,
                order = order,
                name = product.name,
                qty = i['qty'],
                price = i['price'],
                discount = i['discount'],
                image = i['image']
            )
            item.save()

            product.stock -= int(item.qty)
            product.save()

        serializer = OrderSerializer(order,many=False)

        return Response(serializer.data)
    except Exception as e:
        return Response({'detail': json.dumps(e)},status=400)

class OrderById(APIView):
    def get(self,request):
        try:
            email = read_token(request.headers.get('Authorization'))
            pk = request.GET.get('id')
            order = Order.objects.filter(id__exact= pk).first()
            
            if order.user_email != email:
                return Response({'detail':"You don't have permissions"},status=400)

            if order != None: 
                serializer = OrderSerializer(order,many=False)
                return Response(serializer.data) 
            return Response({'datail':"You don't have permissions"},status=400) 
        except :
            return Response({'detail':'Order not exists'},status=400)
        
class updateOrderPaid(APIView):
    def put(self,request):
        try:
            order = Order.objects.filter(id__exact = request.data['id']).first()
            if order != None:
                    order.isPaid = True
                    order.paidAt = datetime.now()
                    order.transactionId = request.data['transactionId']
                    order.save()
                    return Response({'Order paid'})
            return Response({'detail':"order not found"},status=400) 
        except Exception as e:
            return Response({'detail':"Something went wrong"},status=400) 

class getAllOrders(APIView):
    def get(self,request):
        try:
            email = read_token(request.headers.get('Authorization'))
            orders = Order.objects.filter(user_email__exact = email)
            if orders != None:
                serializer = OrderSerializer(orders,many=True)
                return Response(serializer.data)
            
            Response({'datail':"You don't have permissions"},status=400)
        except:
            return Response({'detail':'no order found'},status=400)