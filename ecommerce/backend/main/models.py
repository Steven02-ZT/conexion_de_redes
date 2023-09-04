from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from phonenumber_field.modelfields import PhoneNumberField

from django.contrib.auth.models import User

class Category(models.Model):
    id = models.AutoField(primary_key=True,editable=False)
    name = models.CharField(max_length=50, null=False)

    def __str__(self) -> str:
        return self.name

class Product(models.Model):
    id = models.AutoField(primary_key=True,editable=False)
    name = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(max_length=800,null=False)
    price = models.DecimalField(max_digits=6,decimal_places=2)
    color = models.CharField(max_length=15,null=False,blank=True)
    brand = models.CharField(max_length=30, null=False, blank=True)
    stock = models.IntegerField(null=False,blank=True,default=0)
    large = models.DecimalField(max_digits=5, decimal_places=2,default=0)
    broad = models.DecimalField(max_digits=5, decimal_places=2,default=0)
    height = models.DecimalField(max_digits=5, decimal_places=2,default=0)
    create_at = models.DateField(auto_now_add=True)
    discount = models.DecimalField(max_digits=3, decimal_places=1,default=0)
    pdf = models.CharField(max_length=250,blank=True)

    def __str__(self) -> str:
        return self.name
    
class Images(models.Model):
    id = models.AutoField(primary_key=True,editable=False)
    path = models.CharField(max_length=250,null=False,blank=True)
    productId = models.ForeignKey(Product, on_delete=models.CASCADE,null=True)

class Product_Category(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return str(self.category.name)
    
class Recomentation(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    product = models.OneToOneField(Product,on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.product.name
        
class Order(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    user_email = models.EmailField(max_length=254,editable=False,null=False,blank=True)
    paymentMethod = models.CharField(max_length=50, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now=False, auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now=False, auto_now_add=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, blank=True, null=True)
    transactionId = models.CharField(max_length=50, null=True)

    def __str__(self) -> str:
        return str(self.user_email)
    
class OrderItem(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=50, null=True, blank=True)
    qty = models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    discount = models.DecimalField(max_digits=3, decimal_places=1,default=0)
    image = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
    
class ShippingAddress(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    order = models.ForeignKey(Order,on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField( max_length=200,null=True, blank=True)
    department = models.CharField(max_length=50, null=True, blank=True)
    municipality = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self) -> str:
        return self.address