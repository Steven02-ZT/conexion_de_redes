import React from 'react'
import { Link } from 'react-router-dom'


function CheckoutSteps({step1, step2, step3, step4}) {
  return (
    <div className='flex w-full justify-center items-center'>
        <div className='p-5'>
        {step1 ? (
            <Link to={'/login'} className='text-yellow-400'>Login</Link>
        ):(
            <p className='text-sm text-gray-500'>Login</p>
        )}
        </div>

        <div className='p-5'>
        {step2 ? (
            <Link to={'/shipping'} className='text-yellow-400'>Shipping</Link>
        ):(
            <p className='text-sm text-gray-500'>Shipping</p>
        )}
        </div>

        <div className='p-5'>
        {step3 ? (
            <Link to={'/payment'} className='text-yellow-400'>Payment</Link>
        ):(
            <p className='text-sm text-gray-500'>Payment</p>
        )}
        </div>

        <div className='p-5'>
        {step4 ? (
            <Link to={'/placeorder'} className='text-yellow-400'>Place order</Link>
        ):(
            <p className='text-sm text-gray-500'>Place order</p>
        )}
        </div>
    </div>
  )
}

export default CheckoutSteps