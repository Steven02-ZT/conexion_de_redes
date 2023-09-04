import React, {useEffect, useState} from 'react'

import Banner from './Banner'

import ProductosLista from './ProductosLista'
import Oferts from './Oferts'
import News from './News'
import Search from './Search'
import Filter from './Filter'
import { DualRing } from "react-loading-io";

import { useNavigate, useSearchParams } from 'react-router-dom'

import { getCateforys, getProductByCategory } from '../../Actions/Products_actions'
import { useDispatch, useSelector } from 'react-redux'

function Productos() {
    const priceList = [
        {
            "from":10,
            "to":30,
            "text":"10-30 USD"
        },
        {
            "from":30,
            "to":50,
            "text":"30-50 USD"
        },
        {
            "from":50,
            "to":100,
            "text":"50-100 USD"
        },
        {
            "from":100,
            "to":9999,
            "text":"More 100 USD"
        }
    ]

    let [searchParams] = useSearchParams()
    const type = searchParams.get('type')
    const search = searchParams.get('search')

    const dispatch = useDispatch()
    const data = useSelector((state) => state.categorys)
    const {error,categorys} = data
    useEffect(() => {
        const fetchCategorys = async () => {
            try {
              await dispatch(getCateforys());
            } catch (error) {
            }
          };
      
          fetchCategorys();
    },[dispatch])

    const navigate = useNavigate()
    const [filterActive, setFilterActive] = useState('')
    const [filterPrice,setFilterPrice] = useState('')

    function categoryFilter(category,from=null,to=null,text=null){
        if (from != null && to != null && text != null){
            dispatch(getProductByCategory(category,from,to))
            setFilterActive(category)
            setFilterPrice(text)
        }else if(from != null && to != null && text != null && category === ""){
            
            dispatch(getProductByCategory(from,to))
            setFilterPrice(text)
        }
        else{
            dispatch(getProductByCategory(category))
            setFilterActive(category)
            setFilterPrice('')
        }
        navigate('/productos?type=filter')
    }

    const filterRemuveHeandler = () => {
        setFilterActive('')
        setFilterPrice('')
        navigate("/productos")
    }
      

  return (
    <div>
        <Banner/>
        <div className='productsListContainer h-auto w-full relative bg-white grid' style={{"zIndex":"1","marginBottom":"0","gridTemplateColumns":"20% 80%"}}>
            <div className='filterDiv w-full bg-white' style={{"height":"400px","position":"sticky","top":"100px"}}>

                <ul className='p-8'>
                    <button onClick={filterRemuveHeandler} className='p-2 text-white bg-gray-900 w-full mb-3'>Remover filtros</button>
                    <h1 className='border-b-2 border-blue-900 text-gray-900 text-center text-xl'>Categoría</h1>
                    {categorys ? categorys.map(element => (
                       <li key={element.id} className='font-thin text-gray-500 pl-5'>
                        {(filterActive === element.id) ? (
                            <button type='button' className='text-slate-400' onClick={() => categoryFilter(element.id)}>{element.name}</button>
                        ): (
                            <button type='button' onClick={() => categoryFilter(element.id)}>{element.name}</button>
                        )}
                       </li>
                    )):(
                        <div className="col-span-4 justify-center flex flex-col">
                            <div className="flex"><DualRing size={50} /><h1 className="p-5 text-blue-950 text-2xl font-semibold">Up!!</h1></div>
                            <div><p className="p-5 text-blue-800 text-md">Intenta volver a cargar la página.</p></div>
                        </div>
                    )}
                </ul>

                <ul className='p-8 pt-3'>
                    <h1 className='border-b-2 border-blue-900 text-gray-900 text-center text-xl'>Precios</h1>
                    {priceList.map(element =>(
                         <li key={element.text} className='font-thin text-gray-500 pl-5'>
                        {(filterPrice === element.text) ? (
                           <button type='button' className='text-slate-400'
                           onClick={() => categoryFilter(filterActive,element.from,element.to,element.text)}>
                                    {element.text}
                            </button>
                        ):(
                            <button type='button' onClick={() => categoryFilter(filterActive,element.from,element.to,element.text)}>
                                    {element.text}
                            </button>
                        )}
                        </li>
                    ))}
                </ul>
            </div>
            {type && (type === "ofertas") ? (
                <Oferts/>
            ): type && (type === "nuevos") ? (
                <News/>
            ): search ? (
                <Search/>
            ): type && (type === "filter") ? (
                <Filter/>
            ): (<ProductosLista/>)}
        </div>
    </div>
  )
}

export default Productos