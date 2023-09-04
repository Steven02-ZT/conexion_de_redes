<script setup>
import server from '@/assets/images/server2.jpeg'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const serv = server

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: "2000",
};

const breakpoints = {
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
};

</script>

<script>
import axios from 'axios';
const host = 'https://0ftufth33a.execute-api.us-east-2.amazonaws.com/developer'

export default {
    name: 'Products',
    data(){
        return{
            products: {}
        }
    },
    async mounted() {
        try {
            const { data } = await axios.get(`${host}/products/`);
            this.products = JSON.parse(data['body']);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
  }
</script>

<template>
    <section class="h-fit pt-10 bg-gray-950 pb-10">
        <h1 class="text-center text-slate-200 quicksand-font header">Algunos de nuestros Productos</h1>
        <div class="products-slide mt-10 text-white">
            
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true">
                <Slide v-for="product in products" :key="product">
                <div class="carousel__item">
                    <div class="bg-slate-200 text-black rounded-md h-full w-full">
                        <div class="bg-indigo-500 w-full h-3/5 bg-cover rounded-md" 
                        :style="{'background-image':`url(${product.images[0].path})`}"></div>
                        <div class="w-full text-left p-2 flex flex-col gap-2">
                            <h1 class="text-indigo-900 paragraph font-bold quicksand-font">{{ product.name }}</h1>
                            <h2 class="text-pink-500 quicksand-font small-text font-thin">${{ product.price }}</h2>
                            <a :href="`http://localhost:3000/productos/${product.id}`"
                            class="p-1 w-32 rounded-md bg-blue-800 flex items-center justify-center text-slate-300 m-auto">
                                ver más
                            </a>
                        </div>
                    </div>
                </div>
                </Slide>

            <template #addons>
            <Navigation/>
            </template>
        </Carousel>
        </div>
    </section>
</template>

<style>
.products-slide .carousel button{
    border-radius: 100%;
    color: white;
}

.products-slide .carousel__item{
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    border-radius: 20px;
}
</style>