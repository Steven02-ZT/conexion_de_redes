import {ORDER_CREATE_REQUEST,
        ORDER_CREATE_SUCCESS,
        ORDER_CREATE_FAIL,
        ORDER_DETAILS_REQUEST,
        ORDER_DETAILS_SUCCESS,
        ORDER_DETAILS_FAIL,
        ORDER_PAY_FAIL,
        ORDER_PAY_REQUEST,
        ORDER_PAY_SUCCESS,
        GET_ORDERS_REQUESTS,
        GET_ORDERS_SUCCESS,
        GET_ORDERS_FAIL
        } from "../Constants/Order_constants";

import { CART_CLEAR_ITEMS } from '../Constants/Cart_constants'

import axios from 'axios'

const host = 'https://0ftufth33a.execute-api.us-east-2.amazonaws.com/developer'

export const createOrder = (order) => async(dispatch) => {
    try{
        dispatch({type:ORDER_CREATE_REQUEST})

        let token = JSON.parse(localStorage.getItem('tokens')).id_token
        let json = {
            "body":{
                "order":order
            }
        }

        const {data} = await axios.post(`${host}/order/create`,
                        json,
                        {
                            headers:{
                                "Authorization": token
                            }
                        })

        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:JSON.parse(data['body'])
        })

        dispatch({
            type:CART_CLEAR_ITEMS,
            payload:data
        })

        localStorage.removeItem('cartItems')
    }catch(error){
        dispatch({
            type:ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
        })
    }
}

export const orderDetails = (id) => async(dispatch) => {
    try{
        dispatch({type:ORDER_DETAILS_REQUEST})

        let token = JSON.parse(localStorage.getItem('tokens')).id_token

        const {data} = await axios.get(`${host}/order/status?id=${id}`,
                        {
                            headers:{
                                'Authorization':token
                            }
                        })

        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:JSON.parse(data['body'])
        })

    }catch(error){
        dispatch({
            type:ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                    ? error.response.data.datail
                    : error.message
        })
    }
}

export const payOrder = (id,transactionId) => async(dispatch) => {
    try{
        dispatch({type:ORDER_PAY_REQUEST})
        let token = JSON.parse(localStorage.getItem('tokens')).id_token

        let payload = {
            "pathParameters":{
                "orderId": id,
                "transactionId":transactionId
            }
        }
        const {data} = await axios.put(`${host}/order/pay`, payload,
                        {
                            headers:{
                                "Content-Type":'application/json',
                                'Authorization':token
                            }
                        })

        dispatch({
            type:ORDER_PAY_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:ORDER_PAY_FAIL,
            payload: error.response && error.response.data.detail
                    ? error.response.data.datail
                    : error.message
        })
    }
}

export const getOrders = () => async(dispatch) => {
    try {
      dispatch({type:GET_ORDERS_REQUESTS})
      let token = JSON.parse(localStorage.getItem('tokens')).id_token

      const {data} = await axios.get(`${host}/order/user-orders`,{
        headers:{
            "Authorization":token
        }
      })

      dispatch({
        type:GET_ORDERS_SUCCESS,
        payload:JSON.parse(data['body'])
      })

    } catch (error) {
        dispatch({
            type:GET_ORDERS_FAIL,
            payload: error.response && error.response.data.detail
                    ? error.response.data.datail
                    : error.message
        })
    }
  }