<script setup>
import video_bg from "@/assets/images/tunnelWallpaper.mp4";
const bg = video_bg;

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook,faFacebookMessenger,faInstagram,faGoogle  } from '@fortawesome/free-brands-svg-icons';

</script>

<template>
  <section class="h-fit init">
    <div class="w-full relative">
      <div class="relative">
        <div class="blur-bg w-full h-full top-0 left-0 absolute"></div>
        <video :src="bg" class="h-full w-full video-bg" autoplay muted loop></video>
      </div>
      <div class="absolute top-0 left-0 z-10 w-full h-full paragraph oswald-font grid grid-rows-3">
        <div class="text-right flex justify-end items-center h-32 div-brands">
          <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-5" target="_blank">
            <FontAwesomeIcon :icon="faFacebook" class="text-purple-600 text-xl mr-2" spin/><span>#conexion_redes</span></a>
          <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-5" target="_blank">
            <FontAwesomeIcon :icon="faFacebookMessenger" class="text-pink-600 text-xl mr-2" spin/><span>#conexion_redes</span></a>
          <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-5" target="_blank">
            <FontAwesomeIcon :icon="faInstagram" class="text-purple-600 text-xl mr-2" spin/><span>#conexion_redes</span></a>
          <a href="mailto:gerencia@conexionderedes.com" class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-5" target="_blank">
            <FontAwesomeIcon :icon="faGoogle " class="text-teal-600 text-xl mr-2" spin/><span>@conexionderedes</span></a>
        </div>
        <div class="flex flex-col justify-center w-full text-center items-center div-info">
          <h1 class="header text-white quicksand-font font-semibold">Abriendo las Puertas <br> al Futuro del Data Center</h1>
          <p class="oswald-font paragraph text-gray-200 tracking-widest pt-10">Diseñando la Próxima Generación de Infraestructura de Data Centers: <br>
            Innovación, Tecnología y Soluciones para el Futuro de la Administración y Almacenamiento de Datos</p>
        </div>
        <div class="flex justify-center items-center text-center gap-5 div-buttons">
          <a href="https://api.whatsapp.com/send?phone=50372319551" class="p-4 w-48 border border-purple-500 rounded-full bg-black text-white small-text quicksand-font" target="_blank">Escribenos a WhatsApp</a>
          <a href="#" class="p-4 w-48 border-2 border-pink-600 rounded-full bg-white text-black small-text quicksand-font">Empieza a comprar</a>
        </div>
      </div>
    </div>
    <div>
      <p class="text-slate-500 tiny-text quicksand-font pl-10 h-16 p-4 flex items-center">
        &copy; 2023 ConexionDeRedes S.A. Todos los derechos reservados.</p>
    </div>
  </section>
</template>

<style>
.video-bg {
  object-fit: cover;
  height: 80vh;
}

.blur-bg {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1;
}

.fa-gradient {
	background: -webkit-gradient(linear, left top, left bottom, from(#f00), to(#f0eded));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
