import React from 'react'

import { FaUser,FaShoppingBag } from 'react-icons/fa'
import { BsShopWindow,BsFillPinMapFill } from 'react-icons/bs'
import { RiSecurePaymentFill } from 'react-icons/ri'

function Steps() {
  return (
    <div className='w-full mt-32 relative stepsSection' style={{'height':'300px'}}>
        <div className='h-1/4 flex items-center justify-left pl-10'>
          <h1 className='text-blue-900 font-medium text-3xl'>Cómo comprar en C.R?</h1>
        </div>
        <div className='stepsItemsContainer'>
        <div className='grid grid-cols-12 gap-8 justify-center items-center stepsItems'>
          <div className='col-start-2 w-full h-full col-span-2 justify-center items-center grid gap-2 stepStart'>
            <div className='bg-white h-32 w-32 circleIconStep flex justify-center items-center m-auto'>
                <FaUser className='text-6xl text-blue-950'/>
            </div>
            <h1 className='pt-2 text-center'>Crear una cuenta</h1>
          </div>
          <div className='w-full h-full col-span-2 justify-center items-center grid gap-2'>
            <div className='bg-white h-32 w-32 circleIconStep flex justify-center items-center m-auto'>
                <BsShopWindow className='text-6xl text-blue-950'/>
            </div>
            <h1 className='pt-2 text-center'>Busca tus productos y agregalos al carrito</h1>
          </div>
          <div className='w-full h-full col-span-2 justify-center items-center grid gap-2'>
            <div className='bg-white h-32 w-32 circleIconStep flex justify-center items-center m-auto'>
                <BsFillPinMapFill className='text-6xl text-blue-950'/>
            </div>
            <h1 className='pt-2 text-center'>Selecciona la ubicación de entrega</h1>
          </div>
          <div className='w-full h-full col-span-2 justify-center items-center grid gap-2'>
            <div className='bg-white h-32 w-32 circleIconStep flex justify-center items-center m-auto'>
                <RiSecurePaymentFill className='text-6xl text-blue-950'/>
            </div>
            <h1 className='pt-2 text-center'>Realiza tu pago seguro</h1>
          </div>
          <div className='w-full h-full col-span-2 justify-center items-center grid gap-2'>
            <div className='bg-white h-32 w-32 circleIconStep flex justify-center items-center m-auto'>
                <FaShoppingBag className='text-6xl text-blue-950'/>
            </div>
            <h1 className='pt-2 text-center'>Espera tu pedido</h1>
          </div>
        </div>
        </div>
        <hr className='w-full absolute top-1/2' style={{border:"1px solid yellow","zIndex":"-1"}}/>
    </div>
  )
}

export default Steps