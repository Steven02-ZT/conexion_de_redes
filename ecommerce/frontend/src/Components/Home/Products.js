import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { BsCircle,BsFillCircleFill } from 'react-icons/bs'
import { DualRing } from "react-loading-io";

import { getOfferts } from '../../Actions/Products_actions'

function Products() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.offerts)
  const {error,offerts} = data

  useEffect(() => {
    dispatch(getOfferts())
  },[dispatch])

  let only4Offerts = []
  try{
    only4Offerts = Object.values(offerts).slice(0, 4);
  }catch{}

  return (
    <div className='mt-20 mb-32 productsHome' style={{"height":"500px"}}>
        <div className="h-3/4 w-full grid grid-cols-4 gap-2 justify-center relative bg-gradient-landing">
          {/*cards*/}
          {offerts ? only4Offerts.map(element => (
            <div key={element.id} className="h-4/5 rounded-xl ml-auto mr-auto card" style={{marginTop:"-30px"}}>
            <div className="h-2/3 rounded-xl card-image"
            style={{"backgroundImage":`URL(${element.images[0].path})`}}></div>
          <div className="h-1/3 grid grid-cols-4 md:grid-rows-3 lg:grid-rows-3 gap-2 pt-2">
            <div className="w-full col-span-4">
              <ul className="grid grid-cols-3 gap-2 align-center pl-5 pr-5 cardInfo">
              <Link to={`/productos/${element.id}`} className="col-span-2"><li>{element.name}</li></Link>
                <div className='col-span-1'>
                {(element.discount > 0) ? (
                  <div className="cardInfoPrices">
                    <li className="text-right line-through text-gray-500">${element.price}</li>
                    <li className="text-right text-emerald-500 text-lg font-bold">
                      ${(element.price - ((element.price * element.discount)/100)).toFixed(2)}
                    </li>
                  </div>
                ): (<li className="text-right text-gray-500">${element.price}</li>)}
               </div>
              </ul>
            </div>
            <div className="w-full pl-5 pr-5 col-span-2 grid grid-cols-4 pt-3 cardColorIndicator">
              {(element.color !== "white") ? (<BsFillCircleFill style={{"color":element.color}}/>) : (<BsCircle/>)}
            </div>
            <div className="w-full col-span-4 flex justify-center pb-2 cardButtonInfo">
                  <div className="w-32 p-2 bg-slate-400 flex justify-center items-center rounded-lg text-white"> 
                    <Link className="text-sm" to={`/productos/${element.id}`}>Más información</Link> 
                  </div>
            </div>
          </div>
            </div>
          )): error ? (<div className="col-span-4 justify-center flex flex-col">
          <div className="flex"><DualRing size={50} /><h1 className="p-5 text-blue-950 text-2xl font-semibold">Up!!</h1></div>
          <div><p className="p-5 text-blue-800 text-md">Intenta volver a cargar la página.</p></div>
        </div>) : ""
        }
      </div>
      <div className='mt-20 flex justify-center w-full productsLink'>
      <Link to={'/productos?type=ofertas'}
        className='bg-slate-400 text-white rounded-md col-span-4 m-auto p-3 text-center'>Explorar todas las ofertas</Link>
      </div>
    </div>
  )
}

export default Products