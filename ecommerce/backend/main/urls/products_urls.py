from django.urls import path

from main.views import products_views as views

urlpatterns = [
    path('',views.getProducts,name="products"),
    path('productId',views.getProductById,name="product"),
    path('search',views.getProductByName,name="search"),
    path('latest',views.getNewest,name="latest"),
    path('offers',views.getOffers,name="offers"),
    path('recomendations',views.getRecomendations,name='recomendations'),
    path('productCategory',views.getProductByCategory,name="productCategory"),
    path('categorys',views.getCategorys,name="categorys"), 
]
