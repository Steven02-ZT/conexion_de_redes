import React, { useEffect,useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams } from 'react-router-dom'
import { orderDetails } from '../../Actions/order_actions'
import { ORDER_PAY_RESET } from '../../Constants/Order_constants'

import { DualRing } from "react-loading-io";

function OrderScreen() {
  const dispatch = useDispatch()
  let {id}= useParams();

  const orderDetail = useSelector((state) => state.orderDetails)
  const {order,error,loading} = orderDetail

  let itemsPrice = 0
  try{
    if(order){
      itemsPrice = Number(order.orderItems.reduce((acc,item) => acc + (item.qty * (item.price - (item.price * item.discount)/100)), 0).toFixed(2))
    }
  }catch(error){
    console.log(order.detail)
  }

  const getOrderDetails = useCallback(()=>{
      dispatch({type:ORDER_PAY_RESET})
      dispatch(orderDetails(id))
  },[id,dispatch])

  useEffect(() => {
    getOrderDetails()
  },[])

  return (
    <div className=''>
    {(!loading && !error && order && !order.detail) ? (
        <div className='grid grid-cols-12 gap-2 placeOrderInfo'>
            <div className='col-span-8'>
                <div className='p-10 pb-5 border-b w-5/6 m-auto'>
                    <h1 className='text-3xl text-gray-900 uppercase mb-5'>Order : {order.id}</h1>
                    <h2 className='text-gray-500'>Email: {order.user_email}</h2>
                </div>
              <div className='p-10 pb-5 border-b w-5/6 m-auto'>
                <h1 className='text-2xl text-gray-600 uppercase mb-5'>Dirección de envío</h1>
                <span className='text-gray-500 font-thin'>
                  {order.shippingAddress.address},{order.shippingAddress.municipality},{order.shippingAddress.department}
                </span>
              </div>

              <div className='p-10 pb-5 border-b w-5/6 m-auto'>
                <h1 className='text-2xl text-gray-600 uppercase mb-5'>Método de pago</h1>
                <span className='text-gray-500 font-thin block'>Method:&nbsp;{order.paymentMethod}</span>
                <span className='text-gray-500 font-thin block'>
                {order.isPaid ? (
                    <span>Pagado el: {order.paidAt}</span>
                  ): (
                    <span>Pagado el: no ha sido pagado</span>
                  )}
                </span>
                <span className='text-gray-500 font-thin block'>
                {order.isDelivered ? (
                    <span>Enviado el: {order.deliveredAt}</span>
                  ): (
                    <span>Enviado el: no ha sido enviado</span>
                  )}
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
                        {order.orderItems ? order.orderItems.map(element => (
                        <tr key={element.id} className="bg-white grid grid-cols-6 border-b p-2">
                          <td className="flex flex-row items-center col-span-3">
                            <img
                              className="h-14 w-14 object-cover "
                              src={element.image}
                              alt=""
                            />
                            <p className='ml-10 font-normal'>{element.name}</p>
                          </td>
                          <td className="px-16 py-2  items-center justify-end col-span-3 w-full">
                            <p className='flex font-medium '>
                            {element.qty}&nbsp;x&nbsp;
                            ${(element.price - (element.price * element.discount)/100).toFixed(2)}&nbsp;=&nbsp;
                            ${(element.qty * (element.price - (element.price * element.discount)/100).toFixed(2)).toFixed(2)}
                            </p>
                            {element.discount > 0 ? (
                              <ul className='flex gap-2 lastCol'>
                                <li>
                                 <span className='font-medium'>Descuento:</span> 
                                 {((element.price * element.discount)/100).toFixed(2)}
                                </li>
                                <li>
                                  <span className='font-medium'>Precio:</span> {element.price}
                                </li>
                              </ul>
                            ):''}
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
                    ${order.shippingPrice}
                  </li>
                  <li className='text-gray-500 grid grid-cols-2 gap-2 border-b p-3'>
                    <p>Total</p>
                    ${order.totalPrice}
                  </li>
                  <a href={`https://wa.me/50372190525?text=¡Hola! Quiero pagar mi order número: ${order.id}; mi correo es: ${order.user_email}`} 
                  target='_blank' className='p-2 bg-slate-400 text-white mt-2 w-full rounded-sm block text-center'>Solicitar pago</a>
                </ul>
              </div>
            </div>
        </div>
    ):(
      <div className='flex justify-center items-center w-full p-20'>
        <h1 className='text-3xl text-orange-500'>Loading</h1>
        <DualRing size={50} />
      </div>
    )}
    </div>
  )
}

export default OrderScreen