from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.db.models import F
from django.utils import timezone

from main.models import Product,Product_Category,Category,Recomentation,Images

from main.serlializable import ProductSerializer,CategorySerializer,ImagesSerializar

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def getProductById(request):
    try:
        product = Product.objects.filter(id=request.GET.get('id')).first()
        productSerializer = ProductSerializer(product,many=False)

        productCategory = Product_Category.objects.filter(product__exact=product)
        categorys = []
        for i in productCategory:
           categorys.append(Category.objects.filter(name=i.category).first()) 
        categorySerializer = CategorySerializer(categorys,many=True)
        
        serializer = {
            "general":productSerializer.data,
            "categorys":categorySerializer.data
        }
        return Response(serializer) 
    except:
       message = {"error":"Product doesn't exists"}
       return Response(message,status=400)
    
@api_view(['GET'])
def getProductByName(request):
    try:
        product = Product.objects.filter(name__contains = request.GET.get('name'))
        serializer = ProductSerializer(product,many = True)
        return Response(serializer.data)
    except:
        return Response({"message":"We don't have any product with these name"})

@api_view(['GET'])
def getNewest(request): 
    try:
        products =  products = Product.objects.annotate(days_ago=timezone.now() - F('create_at')).order_by('days_ago')
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)
    except:
        error = {"error":"products not found"}
        return Response(error)

@api_view(['GET'])
def getOffers(request):
    try:
        products = Product.objects.filter(discount__gte = 0.1)  
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data) 
    except:
        message = {"message":"We don't have any offer,check again tomorow"}
        return Response(message)
    
@api_view(['GET'])
def getRecomendations(request):
    try:
        products = []
        recomendations = Recomentation.objects.all() [:5]
        for recomendation in recomendations: 
            products.append(Product.objects.filter(name = recomendation).first())
     
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)
    except: 
        return Response({"message":"We don't have any recomendation"})
    
@api_view(['GET'])
def getCategorys(request):
    try:
        categorys = Category.objects.all()
        serializer = CategorySerializer(categorys, many=True)
        return Response(serializer.data)
    except:
        return Response({'message':'Categorys not found.'})
    
@api_view(['GET'])
def getProductByCategory(request):
    try:
        products = []
        if request.GET.get('from') and request.GET.get('to') and request.GET.get('category'):
            productsList = Product_Category.objects.filter(category_id = request.GET.get('category'))
            for product in productsList:
                item = Product.objects.filter(
                    id = product.product_id, 
                    price__gte =  request.GET.get('from'), 
                    price__lte =  request.GET.get('to')
                    ).first()
                if item:
                    products.append(item)
        elif request.GET.get('from') and request.GET.get('to') and  request.GET.get('category') == None:
            products = Product.objects.filter(
                    price__gte =  request.GET.get('from'), 
                    price__lte =  request.GET.get('to'))
        else: 
            productsList = Product_Category.objects.filter(category_id = request.GET.get('category'))
            for product in productsList:
                products.append(Product.objects.filter(id = product.product_id).first())

        serializer = ProductSerializer(products,many = True) 
        return Response(serializer.data)
    except:
        return Response({"message":"we don't have any conexion product."})