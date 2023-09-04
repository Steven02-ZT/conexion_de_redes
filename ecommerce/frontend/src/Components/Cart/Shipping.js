import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { saveShippingAddress } from "../../Actions/Cart_actions";

import CheckoutSteps from "./CheckoutSteps";

function Shipping() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartState = useSelector((state) => state.cart)
    const {shippingAddress} = cartState

    const [address,setAddress] = useState(shippingAddress.address)
    const [department,setDepartment] = useState(shippingAddress.department)
    const [municipality,setMunicipality] = useState(shippingAddress.municipality)

    const shippingAddressHeandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address,department,municipality}))
        navigate('/payment')
    }
  return (
    <div className="stepPages">
        <CheckoutSteps step3/>
      <div className="flex flex-col h-auto mt-10">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg" >
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Dirección
            </h2>

            <form className="mt-5" onSubmit={shippingAddressHeandler}>

                <div className="mt-5 mb-5">
                    <label htmlFor="address" className="block text-xs font-semibold text-gray-600 uppercase">
                        Domicilio
                    </label>
                    <input id="address" type="text" name="address" placeholder="domicilio" autoComplete="true"
                    className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200" required 
                    value={address ? address : ''} onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <div className="mt-5 mb-5">
                    <label htmlFor="municipio" className="block text-xs font-semibold text-gray-600 uppercase">
                        Municipio
                    </label>
                    <input id="municipio" type="text" name="municipio" placeholder="municipio" autoComplete="true"
                    className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200" required 
                    value={municipality ? municipality : ''} onChange={(e) => setMunicipality(e.target.value)}/>
                </div>

                <div className="mt-5 mb-5">
                    <label htmlFor="departamento" className="block text-xs font-semibold text-gray-600 uppercase">
                        Departamento
                    </label>
                    <select name="departamento" id="departamento"
                    className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200" required 
                    value={department ? department : ''} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="" disabled>Select an option</option>
                        <option value="San Salvador">San Salvador</option>
                        <option value="Ahuachapan">Ahuachapan</option>
                        <option value="Santa Ana">Santa Ana</option>
                        <option value="Son Sonate">Son Sonate</option>
                        <option value="La Libertad">La Libertad</option>
                        <option value="Chalatenando">Chalatenando</option>
                        <option value="Cuscatlan">Cuscatlan</option>
                        <option value="La Paz">La Paz</option>
                        <option value="Cabañas">Cabañas</option>
                        <option value="San Vicente">San Vicente</option>
                        <option value="Usulutan">Usulutan</option>
                        <option value="San Miguel">San Miguel</option>
                        <option value="Morazan">Morazan</option>
                        <option value="La Union">La Union</option>
                    </select>
                </div>

                <button type="submit"
                className="w-full p-3 mt-5 bg-gray-800 rounded-sm font-medium text-white uppercase 
                focus:outline-none hover:bg-gray-700 hover:shadow-none" >
                    Continuar
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
