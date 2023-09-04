from django.contrib import admin

from main.models import Product,Category,Product_Category,Recomentation,Order,OrderItem,ShippingAddress,Images

class ProductCategory(admin.TabularInline):
    model = Product_Category
    extra = 1 

class InlineImages(admin.TabularInline):
    model = Images
    extra = 3
    
class ProductCategoryAdmin(admin.ModelAdmin):
    inlines = [ProductCategory,InlineImages]


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderItemInline]


admin.site.register(Product,ProductCategoryAdmin)
admin.site.register(Category)
admin.site.register(Recomentation)
admin.site.register(Order,OrderAdmin)
admin.site.register(ShippingAddress)