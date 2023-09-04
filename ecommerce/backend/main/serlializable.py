from rest_framework import serializers

from main.models import Product,Product_Category,Category,Order,OrderItem,ShippingAddress,Images

class ImagesSerializar(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    images = ImagesSerializar(source='images_set', many=True, read_only=True)   
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'price', 'color', 'brand', 'stock', 'large', 'broad', 'height', 'create_at', 'discount', 'pdf', 'images')

class CategoryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Category
        fields = ['category']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ShippingAddresSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    orderItems = serializers.SerializerMethodField(read_only=True)
    shippingAddress = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Order 
        fields = '__all__'

    def get_orderItems(self,obj):
        items = obj.orderitem_set.all() 
        serializer = OrderItemSerializer(items,many=True)  
        return serializer.data
    
    def get_shippingAddress(self,obj):
        try:
            shippin = obj.shippingaddress_set.first()
            address = ShippingAddresSerializer(shippin,many=False).data
        except:
            address = 'no have shipping address'

        return address