<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faComputerMouse,faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
    <section class="grid grid-cols-2 gap-2 p-10 pt-5 justify-center items-center h-64 who">
        <div class="w-5/6 border-t">
            <h1 class="quicksand-font font-bold header text-blue-800 pt-5">Quienes somos?</h1>
            <p class="text-slate-950 font-thin oswald-font small-text tracking-widest p-3 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis felis, gravida eget varius sed, semper vel erat. 
            Phasellus nec justo justo. In hac habitasse platea dictumst. Donec posuere neque sed est congue laoreet. 
            Maecenas lacinia, est sit amet vulputate tincidunt, eros dolor aliquet leo, sit amet pharetra purus odio eu justo. 
            Proin quis erat et nibh varius feugiat non quis lectus. Proin vel est et purus tempus pharetra quis nec sem.</p>
        </div>
       <div class="grid grid-cols-2">
        <div class="text-right p-5">
            <h2 class="subtittle font-semibold text-slate-800 quicksand-font">Servicios</h2>
            <ul class="font-thin quicksand-font small-text tracking-widest text-slate-600 list-none">
                <li>servicio</li>
                <li>servicio</li>
                <li>servicio</li>
                <li>servicio</li>
                <li>servicio</li>
            </ul>
        </div>
        <div class="flex flex-col  top-0 gap-8">
            <FontAwesomeIcon :icon="faComputerMouse" class="h-14 text-slate-600"/>
            <FontAwesomeIcon :icon="faArrowDownLong" bounce class="h-10 text-slate-400"/>
        </div>
       </div>
    </section>
</template>