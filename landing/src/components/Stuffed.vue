<script setup>
import wallpaper from '@/assets/images/codeBagsWallpaper.jpg'
const wall = wallpaper

import datacenter from '@/assets/images/datacenter.png'
const data = datacenter
</script>

<template>
    <section class="h-fit pb-10 mt-24 bg-gray-950 stuffed">
        <h1 class="header w-full text-center quicksand-font font-bold pt-32
        text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">Nuestra Perspectiva</h1>
        <div class="grid grid-cols-2 items-center mt-10">
            <div class="p-5 column-item relative">
                <h1 class="header oswald-font font-bold text-center text-indigo-400">Misión</h1>
                <p class="text-right font-light text-slate-400 p-10 tracking-widest oswald-font line-clamp-4 leading-8">Proveer soluciones de conectividad en redes de fibra 
                    óptica, redes de cobre e inalámbricas a las compañías proveedoras de servicios de telecomunicaciones, 
                    transmisión de datos  e Internet.</p>
                <div class=" bg-indigo-200 w-3/4" style="height: 1px;"></div>
            </div>
            <div class="p-5">
                <h1 class="header oswald-font font-bold text-center text-indigo-400">Visión</h1>
                <p class="text-left font-light text-slate-400 p-10 tracking-widest oswald-font line-clamp-4 leading-8">Ser líderes en Centro America, para facilitar el 
                    acceso a las tecnologías de telecomunicaciones, mediante el apoyo de sistemas de conectividad alámbrica e inalámbrica,
                    para las diferentes compañías públicas y privadas de la región.</p>
                <div class=" bg-indigo-200 w-3/4 float-right" style="height: 1px;"></div>
            </div>
        </div>
    </section>
</template>

<style>
    .column-item::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  background-color: var(--v-slate-400); /* Color de la línea de división */
}

</style>