<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSatelliteDish,faSolarPanel,faSeedling } from '@fortawesome/free-solid-svg-icons';
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons'
</script>

<template>
    <section class="bg-stone-200 h-fit flex gap-3 pb-10 pt-10 ourPrivileges">
        <div class="h-fit w-1/3 p-5 privilege">
            <h1 class="text-gray-700 uppercase text-center font-semibold tittle quicksand-font">Telecomunicaciones</h1>
            <p class="text-slate-500 text-justify p-2 pt-5 pb-5">Your content goes here. Edit or remove this text inline or in the module Content settings. 
                You can also style every aspect of this content in the module Design settings and even apply 
                custom CSS to this text in the module Advanced settings.</p>
            <FontAwesomeIcon :icon="faSatelliteDish" class="h-32 text-center w-full text-gray-800"/>
        </div>
        <div class="h-fit w-1/3 p-5 privilege">
            <h1 class="text-gray-700 uppercase text-center font-semibold tittle quicksand-font">Energia Alternativa</h1>
            <p class="text-slate-500 text-justify p-2 pt-5 pb-5">Your content goes here. Edit or remove this text inline or in the module Content settings. 
                You can also style every aspect of this content in the module Design settings and even apply 
                custom CSS to this text in the module Advanced settings.</p>
            <div class="flex justify-end items-end">
                <FontAwesomeIcon :icon="faSolarPanel" class="h-32 text-center w-full text-gray-800"/>
                <FontAwesomeIcon :icon="faSeedling" class="h-16 text-center w-full text-gray-800"/>
            </div>
        </div>
        <div class="h-fit w-1/3 p-5 centered-div">
            <h1 class="text-gray-700 uppercase text-center font-semibold tittle quicksand-font">Nube</h1>
            <p class="text-slate-500 text-justify p-2 pt-5 pb-5">Your content goes here. Edit or remove this text inline or in the module Content settings. 
                You can also style every aspect of this content in the module Design settings and even apply 
                custom CSS to this text in the module Advanced settings.</p>
            <FontAwesomeIcon :icon="faSoundcloud" class="h-32 text-center w-full text-gray-800"/>
        </div>
    </section>
</template>

<style>
.privilege{
    position: relative;
    border-right: 1px solid #1e1e9a;
}
</style>