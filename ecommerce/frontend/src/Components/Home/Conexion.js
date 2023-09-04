import React, { useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineArrowRight } from 'react-icons/ai'
import { DualRing } from "react-loading-io";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import { getProductByCategory } from '../../Actions/Products_actions';

function Conexion() {
    const info = useSelector((state) => state.categoryProducts)
    const {error,categoryProducts} = info

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getProductByCategory(5))
        navigate("/")
    },[dispatch,navigate])


    function perView(){
        var width = window.innerWidth
        if (width >= 1200){
            return 3
        }else if(width <= 1000){
            return 2
        }
    }

  return (
    <div className='grid grid-cols-12 gap-2 bg-gray-200 mt-32' style={{"height":"450px"}}>
        <div className='col-span-3 bg-blue-950 h-full grid grid-rows-2 leftSideConexionProducts'>
            <div className='flex justify-left items-center text-white font-bold text-2xl p-5'>
                <p className='border-b-2 w-4/5'>Switches y <br></br> routers</p>
            </div>
            <div className='flex justify-center items-center bg-slate-400 h-1/5 w-1/2 ml-auto mr-auto rounded-lg'>
                <Link className='text-white font-thin text-xl '>Ver todos&nbsp;<AiOutlineArrowRight style={{"display":"inline"}}/></Link>
            </div>
        </div>
        <div className='col-span-9 slideConexionProductsContainer'>
            <Swiper slidesPerView={perView()} spaceBetween={60} freeMode={true} pagination={{clickable: true,}}
                modules={[Pagination]} className="SwiperConexion bg-white">
                {error ? (
                    <div className="col-span-4 justify-center flex flex-col">
                        <div className="flex"><DualRing size={50} /><h1 className="p-5 text-blue-950 text-2xl font-semibold">Up!!</h1></div>
                        <div><p className="p-5 text-blue-800 text-md">Intenta volver a cargar la página.</p></div>
                    </div>
                ): categoryProducts.map(element => (
                    <SwiperSlide key={element.id}>
                    <div className='grid gap-2 h-full w-full grid-cols-3' style={{gridTemplateRows:"60% 40%"}}>
                        <div className='w-full h-full col-span-3 cardImage' style={{backgroundImage:`URL(${element.images[0].path})`}}></div>
                        <div className='col-span-3 p-5'>
                            <h1 className='text-gray-500 w-3/4 pb-1'>{element.name}</h1>
                            <h2 className='font-bold text-blue-700'>${element.price} USD</h2>
                            <div className='w-1/2 h-8 conexionProductLink m-auto rounded-md text-white flex justify-center items-center mt-8 bg-slate-400'>
                                <Link className='font-thin' to={`productos/${element.id}`}>Más información</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Conexion