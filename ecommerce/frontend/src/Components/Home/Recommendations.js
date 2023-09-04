import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DualRing } from "react-loading-io";

import { getRecomendations } from '../../Actions/Products_actions'

function Recommendations() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.recomendations)
    const {error,recomandations} = data

    useEffect(() => {
        dispatch(getRecomendations())
    },[dispatch])

  return (
    <div className='bg-gray-100 grid grid-cols-12 gap-2 recommendations mb-20 mt-16' style={{"height":"300px","gridTemplateRows":"20% 80%"}}>
        <div className='col-span-4 h-full md:text-2xl flex justify-center items-center font-bold text-gray-900 recomendationsTittle'><h1>Nuestas recomendaciones</h1></div>
        <div className='col-span-12 recomendationDivItems'>
        <div className='col-span-12 h-full grid lg:grid-cols-12 justify-center items-center recomendationsItems'>
        <div className='cols-span-2 rowSpaceRecomendation'>{/*this div is only for space*/}</div>
        {error ? (
                <div className="col-span-4 justify-center flex flex-col">
                    <div className="flex"><DualRing size={50} /><h1 className="p-5 text-blue-950 text-2xl font-semibold">Up!!</h1></div>
                    <div><p className="p-5 text-blue-800 text-md">Intenta volver a cargar la página.</p></div>
                </div>
            ):recomandations.map(element => (
                <div key={element.id} className='lg:col-span-2 md:col-span-1 h-full w-full grid justify-center items-center' >
                        <Link to={`/productos/${element.id}`} className='circleProduct h-40 w-40' style={{"backgroundImage":`URL(${element.images[0].path})`}}></Link>
                        <Link to={`/productos/${element.id}`} className='font-thin text-center text-gray-500'>{element.name}</Link>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Recommendations