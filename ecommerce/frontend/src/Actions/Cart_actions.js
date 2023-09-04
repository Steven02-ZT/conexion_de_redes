import { ITEM_ADD_CART,ITEM_REMOVE_CART,CART_SAVE_SHIPPING_ADDRESS,SAVE_PAYMENT_METHOD,ORDER_INFO_SAVE } from "../Constants/Cart_constants";

import axios from "axios"
const host = 'https://0ftufth33a.execute-api.us-east-2.amazonaws.com/developer'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`${host}/products/productid?productid=${id}`)
    
    let info = JSON.parse(data['body']).general

    dispatch({
        type:ITEM_ADD_CART,
        payload:{
            product: info.id,
            name: info.name,
            price: info.price,
            color: info.color,
            description: info.description,
            discount: info.discount,
            image:info.images[0].path,
            qty
        }
    })

    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async(dispatch,getState) => {
    dispatch({
        type:ITEM_REMOVE_CART,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => async(dispatch) => {
        dispatch({
            type: CART_SAVE_SHIPPING_ADDRESS,
            payload:data
        })

        localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod = (data) => async(dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload:data
    })

    localStorage.setItem('paymentMethod',JSON.stringify(data))
}

export const setOrderInfo = (data) => async(dispatch) => {
    dispatch({
        type: ORDER_INFO_SAVE,
        payload:data
    })
}