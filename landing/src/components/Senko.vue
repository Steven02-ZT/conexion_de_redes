<script setup>
import {ref} from 'vue'
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import SnConector from '@/assets/images/SN-conector.png'
import Csconector from '@/assets/images/CS-conector.png';
import fanout from '@/assets/images/IP-Fanout.png'
import IpMpo from '@/assets/images/IP-MPO.png'
import one from '@/assets/images/IP-One.png'
import mpoconector from '@/assets/images/MPO-conector.png'
const imageUrls = [SnConector,Csconector,mpoconector,IpMpo,fanout,one,];

const currentSlide = ref(0);

const slideTo = (index) => {
  currentSlide.value = index;
};

const information = {
  0:{
    name: 'SN® | CONNECTOR',
    description: `Nuevo diseño de Conector modelo SN 4x Duplex, de SENKO, que esta diseñado para hacer mas eficientes las conexiones 
                  de alta velocidad según los nuevas normas de la IEC , para 4x Duplex en transceiver con factor de forma: QSFP-DD / OSFP, 
                  que transmiten a velocidades de 100 Gbps y 400Gbps, de uso en Data Centers.`,
    pic: imageUrls[0]
  },
  1:{
    name:'CS® | CONNECTOR',
    description: `Conector modelo CS 2x Férula LC, de SENKO, bajo Norma TIA diseñado para hacer más eficientes las conexiones de alta 
                  velocidad en Data Center, sirven para aumentar la densidad y facilitar las conexiones a nivel de RU en los Racks de 
                  Gabinetes de Cableado Estructurado y tambien para uso de en transceiver con factor de forma: QSFP-DD/OSFP, para 
                  velocidades de 100 Gbps, 200Gbps hasta 400Gbps.`,
    pic: imageUrls[1]
  },
  2:{
    name:'MPO PLUS®',
    description:`Conectores MPO, para facilitar el Cableado Estructurado en Data Center, se proveen todos los Cables conectorizados 
                 con MPO y accesorios para el cableado.Ofrecemos conectores MPO con un mínimo de perdidas de inserción de 0.25 dB, 
                 para garantizar la transferencia de alta velocidad en el Data Center.`,
    pic:imageUrls[2]
  },
  3:{
    name:'IP-LC | IP-MPO',
    description:`Conectores para uso en exteriores de aplicaciones especiales o para conexiones FTTA, que ya están listos para los 
                  operadores Inalambricos de LTE y de 5G.`,
    pic:imageUrls[3]
  },
  4:{
    name:'IP-FANOUT',
    description:`Solucion de cables FanOut de uso en exteriores para aplicaciones especiales de FTTA, facilitan el conexionado 
                  de antenas y pueden proveerse con conectores IP-LC(conector LC), IP-SC(conector SC), IP-MPO(Conector MPO) o el nuevo 
                  IP-SN(conector SN) , así como la solucion IP-ONE(que integra en un mismo dispositivo Fibra + Cobre, este ultimo para 
                  energización de equipos o antenas) y están listos para los operadores Inalambricos de LTE y 5G.`,
    pic:imageUrls[4]
  },
  5:{
    name:'IP-ONE®',
    description:`El conector IP-ONE, es una solucion hibrida de uso en exteriores para aplicaciones especiales de FTTA, que facilitan 
                  el conexionado en equipamientos u antena y que integra en un mismo conector Fibra + Cobre, este ultimo para 
                  energización eléctrica de los equipos o antenas y que reducen el tiempo de instalación en Torres u postes y 
                  están listos para los operadores Inalambricos de LTE y 5G.`,
    pic:imageUrls[5]
  }
}
</script>

<template>
  <section class="mt-14 flex flex-col h-fit senko">
    <h1 class="uppercase header quicksand-font text-center text-blue-700 p-10 pb-0">
      PRODUCTOS SENKO
    </h1>
    <div class="">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="product in information" :key="product" >
          <div class="carousel__item w-full" 
          :style="{ 'background-image': `url(${product.pic})`}">
            <div class="w-full h-full slide-div-blur"></div>
            <div class="relative w-full m-auto flex flex-row gap-20 p-10 items-center h-96 text-left information">
              <img :src="product.pic" alt="Slide" class="carousel__image h-64 w-80 m-auto rounded-3xl"/>
              <div class="divider h-80 bg-slate-400" style="width: 1px;"></div>
              <div class="text-slate-100 w-full grid grid-cols-2 justify-center items-center gap-5 general">
                <div class="flex flex-col gap-5 justify-center items-center">
                  <h1 class="font-bold quicksand-font tittle">{{ product.name }}</h1>
                  <!---<a href="/" class="rounded-lg bg-slate-800 w-52 h-12 flex justify-center items-center">Ingresa en nuestra tienda.</a>-->
                </div>
                <div class="description">
                  <p class="font-thin oswald-font">{{ product.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>

      <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel" class="mt-1">
        <Slide v-for="(slide,index) in imageUrls" :key="slide">
          <div class="carousel__item" @click="slideTo(index)">
            <img :src="slide" alt="Slide" class="carousel__image object-cover h-full w-full"/>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<style>
  #gallery .carousel__slide{
    width: 100%;
    height: 400px;
  }

  #thumbnails .carousel__slide{
    height: 75px;
    cursor: pointer;
    margin: 2px;
    margin-top: 0px;
  }

  #thumbnails .carousel__slide .carousel__item{
    width: 100%;
    height: 100%;
  }

  #thumbnails .carousel__slide .carousel__item img{
    object-fit: cover;
    filter: brightness(1);
    border-radius: 0px;
  }

  .slide-div-blur{
    background-color: rgba(0, 0, 0, .8); /* Color de fondo con transparencia */
    backdrop-filter: blur(25px);
    position: absolute;
    top: 0;
  }
</style>
