<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="shadow-sm quicksand-font paragraph h-20 grid grid-cols-2 gap-2 justify-center items-center
  border-b border-slate-300 sticky top-0 bg-white z-50">
    <div class="flex justify-center">
      <nav>
        <RouterLink to="/" class="p-3 font-normal text-blue-700">Inicio</RouterLink>&nbsp;|
        <a href="#" class="p-3 font-thin text-slate-500">Tienda</a>&nbsp;|
        <a href="mailto:gerencia@conexionderedes.com" target="_blank" class="p-3 font-thin text-slate-500">Contactanos</a> 
      </nav>
    </div>
    <div class="flex justify-end w-3/4 nav-logo">
     <div class="h-20 w-32 logo"></div>
    </div>
  </header>

  <RouterView />

  <footer class="mt-10 h-40">
    <div class="flex gap-10 p-5">
      <div class="footer-logo h-32 w-72"></div>
      <div>
        <h1 class="tittle quicksand-font text-center font-semibold text-slate-700">
          Construyendo Puentes Digitales: Tu Conexión en el Mundo de los Data Centers</h1>
        <div class="flex gap-5 mt-10 justify-center">
          <a target="_blank" href="mailto:gerencia@conexionderedes.com" class="w-44 h-10 flex justify-center items-center text-white rounded-md bg-blue-900">Contactanos al correo</a>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=50372319551" class="w-44 h-10 flex justify-center items-center text-slate-900 rounded-md 
          border border-blue-900">Escribenos en whasapp</a>
          <p class="text-slate-500 tiny-text quicksand-font h-16 p-4">
        &copy; 2023 ConexionDeRedes S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  .nav-logo .logo{
    background-image: url(./assets/images/Logo-CXR.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .footer-logo{
    background-image: url(./assets/images/Logo-CXR.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
</style>
