from django.shortcuts import render
from django.views import View

class CustomIndexView(View):
    def get(self, request):
        # Define las rutas que deseas mostrar en la página de inicio
        routes = [
            'api/products/',
            'api/orders/',
            # Otras rutas personalizadas que desees mostrar
        ]
        
        context = {'routes': routes}
        return render(request, 'index.html', context)
