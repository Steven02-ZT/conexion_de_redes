import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import CheckoutSteps from './CheckoutSteps'

import { savePaymentMethod } from '../../Actions/Cart_actions'

function PaymentMethod() {
    const data = useSelector((state) => state.cart)
    const {shippingAddress} = data

    const [method] = useState('card')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHeandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(method))
        navigate('/placeorder')
    }

    if(!shippingAddress.address){
        navigate('/shipping')
    }

  return (
    <div className='stepPages'>
        <CheckoutSteps step2 step4/>
        <div className="flex flex-col h-auto mt-20">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg" >
            <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Select your payment method
            </h2>

            <form className="mt-10" onSubmit={submitHeandler}>

                <div className="flex items-center justify-center p-2">
                    <button type='button' className='text-white p-3 bg-slate-400 w-3/4'>card</button>
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
  )
}

export default PaymentMethod