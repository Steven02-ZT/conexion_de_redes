from django.urls import path
from main.views import order_views as views

urlpatterns = [
    path('add',views.addOrderItem, name='add'),
    path('orderStatus',views.OrderById.as_view(),name='user-order'),
    path("orderStatus/pay", views.updateOrderPaid.as_view(), name="order-paid-paypal"),
    path('orders',views.getAllOrders.as_view(),name="orders"),
]
