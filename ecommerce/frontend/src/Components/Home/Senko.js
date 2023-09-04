import React from "react";

import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper'
import "swiper/css";
import "swiper/css/navigation";

import image from '../../Resources/Images/senko-wall-1.jpg'

function Senko() {
  return (
    <div className="w-full h-screen" id="senkoProducts">
      <div className="h-1/5 grid justify-center items-center pt-20 senkoTittle">
        <h1 className="font-bold text-5xl text-gray-900 text-center">
          PRODUCTOS SENKO
        </h1>
        <h3 className="text-gray-500 text-2xl text-center">
          Distribuidor autorizado
        </h3>
      </div>
      <div className="bg-gray-500 w-full h-3/5 mt-20 divSlider"> 
      <Swiper navigation={true} modules={[Navigation]} className="swiperSenko">
        <SwiperSlide style={{"backgroundImage":`url(${image})`}}>
            <div className="w-full h-full flex justify-center" style={{"backdropFilter":"blur(5px)"}}>
                <div className="w-5/6 h-full swiperImage grid grid-cols-2 grid-rows-2 gap-2"
                style={{"backgroundImage":`url(${image})`}}>
                    <h1 className="text-white p-10 font-bold text-4xl">SN&reg;|CONNECTOR</h1>
                    <p className="text-white text-sm row-start-2 flex items-end p-5">Nuevo diseño de Conector modelo SN 4x Duplex, de SENKO, que esta diseñado para hacer mas eficientes las conexiones 
                        de alta velocidad según los nuevas normas de la IEC , para 4x Duplex en transceiver con factor de forma: 
                        QSFP-DD / OSFP, que transmiten a velocidades de 100 Gbps y 400Gbps, de uso en Data Centers.</p>
                    <div className="row-start-2 col-start-2 text-white flex justify-end items-end pb-5 pr-20">
                        <Link className="bg-black w-1/4 h-8 rounded-md flex justify-center items-center text-yellow-300">Ver más</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{"backgroundImage":`url(${image})`}}>
            <div className="w-full h-full flex justify-center" style={{"backdropFilter":"blur(5px)"}}>
                <div className="w-5/6 h-full swiperImage grid grid-cols-2 grid-rows-2 gap-2"
                style={{"backgroundImage":`url(${image})`}}>
                    <h1 className="text-white p-10 font-bold text-4xl">SN&reg;|CONNECTOR</h1>
                    <p className="text-white text-sm row-start-2 flex items-end p-5">Nuevo diseño de Conector modelo SN 4x Duplex, de SENKO, que esta diseñado para hacer mas eficientes las conexiones 
                        de alta velocidad según los nuevas normas de la IEC , para 4x Duplex en transceiver con factor de forma: 
                        QSFP-DD / OSFP, que transmiten a velocidades de 100 Gbps y 400Gbps, de uso en Data Centers.</p>
                    <div className="row-start-2 col-start-2 text-white flex justify-end items-end pb-5 pr-20">
                        <Link className="bg-black w-1/4 h-8 rounded-md flex justify-center items-center text-yellow-300">Ver más</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Senko;
