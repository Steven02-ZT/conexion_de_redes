from django.contrib import admin
from django.urls import path,include
from .views import CustomIndexView

from django.views.generic import TemplateView

handler404 = TemplateView.as_view(template_name='index.html')
handler400 = TemplateView.as_view(template_name='index.html')

urlpatterns = [
    path('', CustomIndexView.as_view(), name='custom_index'), 
    path('management-panel-admin-fdk5/', admin.site.urls),
    path('api/products/', include("main.urls.products_urls")), 
    path('api/orders/', include("main.urls.order_urls")), 
]

