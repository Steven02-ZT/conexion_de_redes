import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from './CheckoutSteps'
import { createOrder } from '../../Actions/order_actions'
import {setOrderInfo} from '../../Actions/Cart_actions'
import { ORDER_CREATE_RESET } from '../../Constants/Order_constants'

import Swal from 'sweetalert2'

function Placeholder() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const orderCreate = useSelector((state) => state.order)
  const {order,success} = orderCreate

  const cart = useSelector((state) => state.cart)
  const {cartItems,shippingAddress,paymentMethod} = cart

  const itemsPrice = Number(cartItems.reduce((acc,item) => acc + (item.qty * (item.price - (item.price * item.discount)/100)), 0).toFixed(2))
  const shippingPrice = Number((cartItems >10 ? 2 : 3).toFixed(2))
  const totalPrice = (Number(itemsPrice) + Number(shippingPrice))
  let orderInfo = {
    'itemsPrice':itemsPrice,
    'shippingPrice':shippingPrice,
    'totalPrice':totalPrice,
  }

  useEffect(() => {
      const Navigate = () => {
        if (!shippingAddress.address || !shippingAddress.municipality || !shippingAddress.department){
          navigate('/shipping')
        }else if(paymentMethod == null){
          navigate('/payment')
        }
      }
      Navigate()

      const orderSuccess = () => {
        if(success){
          if(order.detail){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: order.detail
            })

          setTimeout(() => {
            window.location.replace('/')
          },2000)
          }else{
            window.location.replace(`/order/${order.id}`)
            dispatch({type:ORDER_CREATE_RESET})
          }
        }
      }
      orderSuccess()
      
      dispatch(setOrderInfo(orderInfo))
  },[navigate,shippingAddress,paymentMethod,success,order,dispatch])

  const placeOrder = (e) => {
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingPrice: shippingPrice,
      paymentMethod: cart.paymentMethod,
      itemsPrice: itemsPrice,
      totalPrice: totalPrice,
      shippingAddress: cart.shippingAddress
    }))
  }

  return (
    <div>
        <CheckoutSteps step2 step3/>
        <div className='grid grid-cols-12 gap-2 placeOrderInfo'>
            <div className='col-span-8'>
              <div className='p-10 pb-5 border-b w-5/6 m-auto'>
                <h1 className='text-2xl text-gray-600 uppercase mb-5'>Dirección de envío</h1>
                <span className='text-gray-500 font-thin'>
                  {shippingAddress.address},{shippingAddress.municipality},{shippingAddress.department}
                </span>
              </div>

              <div className='p-10 pb-5 border-b w-5/6 m-auto'>
                <h1 className='text-2xl text-gray-600 uppercase mb-5'>Método de pago</h1>
                <span className='text-gray-500 font-thin'>
                  Method:&nbsp;{paymentMethod}
                </span>
              </div>

              <div className='p-10 pb-5 w-5/6 m-auto'>
                <h1 className='text-2xl text-gray-600 uppercase mb-5'>Productos</h1>
                <div className='text-gray-500 font-thin scrollpanel'>
                    <table className="min-w-full table-auto">
                      <thead className="justify-between">
                          <tr className="">
                            <th className=""></th>
                            <th className=""></th>
                          </tr>
                      </thead>
                      <tbody className="bg-gray-200">
                        {cartItems ? cartItems.map(element => (
                        <tr key={element.product} className="bg-white grid grid-cols-6 border-b p-2">
                          <td className="flex flex-row items-center col-span-3">
                            <img
                              className="h-14 w-14 object-cover "
                              src={element.image}
                              alt=""
                            />
                            <p className='ml-10 font-normal'>{element.name}</p>
                          </td>
                          <td className="px-16 py-2 flex items-center justify-end col-span-3 w-full">
                            <p className='flex font-medium '>
                            {element.qty}&nbsp;x&nbsp;
                            ${(element.price - (element.price * element.discount)/100).toFixed(2)}&nbsp;=&nbsp;
                            ${(element.qty * (element.price - (element.price * element.discount)/100).toFixed(2)).toFixed(2)}
                            </p>
                          </td>
                        </tr>
                        )):''}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
            <div className='col-span-4 p-16'>
              <div className='border p-5 shadow-md'>
                <h1 className='text-3xl font-medium uppercase text-gray-600 text-center p-3 border-b'>Resumen del pedido</h1>
                <ul>
                  <li className='text-gray-500 grid grid-cols-2 gap-2 border-b p-3'>
                    <p>Productos</p>
                    ${itemsPrice}
                  </li>
                  <li className='text-gray-500 grid grid-cols-2 gap-2 border-b p-3'>
                    <p>Envío</p>
                    ${shippingPrice}
                  </li>
                  <li className='text-gray-500 grid grid-cols-2 gap-2 border-b p-3'>
                    <p>Total</p>
                    ${totalPrice}
                  </li>
                  <li className='flex justify-center mt-5'>
                    <button onClick={placeOrder} className='bg-gray-900 text-white uppercase p-3 w-3/4 hover:bg-gray-700'>Realizar pedido</button>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Placeholder