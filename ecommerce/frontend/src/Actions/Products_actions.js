import axios from "axios"

import { 
    PRODUCTS_GET_FAIL,
    PRODUCTS_GET_REQUEST,
    PRODUCTS_GET_SUCCESS,

    PRODUCT_GET_FAIL,
    PRODUCT_GET_REQUEST,
    PRODUCT_GET_SUCCESS,

    NEWEST_PRODUCTS_GET_FAIL,
    NEWEST_PRODUCTS_GET_REQUEST,
    NEWEST_PRODUCTS_GET_SUCCESS,

    OFFERSTS_GET_FAIL,
    OFFERSTS_GET_REQUEST,
    OFFERSTS_GET_SUCCESS,

    RECOMENDATIONS_GET_SUCCESS,
    RECOMENDATIONS_GET_FAIL,
    RECOMENDATIONS_GET_REQUEST,

    CATEGORY_PRODUCTS_GET_REQUEST,
    CATEGORY_PRODUCTS_GET_SUCCESS,
    CATEGORY_PRODUCTS_GET_FAIL,

    SEARCH_PRODUCTS_GET_FAIL,
    SEARCH_PRODUCTS_GET_REQUEST,
    SEARCH_PRODUCTS_GET_SUCCESS} from '../Constants/Product_constant'

import { CATEGORYS_GET_FAIL,CATEGORYS_GET_REQUEST,CATEGORYS_GET_SUCCESS } from '../Constants/Category_constants'

const host = 'https://0ftufth33a.execute-api.us-east-2.amazonaws.com/developer'

export const getlistProducts = () => async(dispatch) =>{
    try{
        dispatch({type:PRODUCTS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/`)

        dispatch({
            type:PRODUCTS_GET_SUCCESS,
            payload:JSON.parse(data['body'])
        })

    }catch(error){
        dispatch({
            type:PRODUCTS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const getProductById = (id) => async(dispatch) => {
    try{
        dispatch({type:PRODUCT_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/productid?productid=${id}`)

        dispatch({
            type:PRODUCT_GET_SUCCESS,
            payload:JSON.parse(data['body'])
        })

    }catch(error){
        dispatch({
            type:PRODUCT_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const SearchProducts = (name) => async(dispatch) => {
    try{
        dispatch({type:SEARCH_PRODUCTS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/search?name=${name}`)

        dispatch({
            type:SEARCH_PRODUCTS_GET_SUCCESS,
            payload:JSON.parse(data['body'])
        })

    }catch(error){
        dispatch({
            type:SEARCH_PRODUCTS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const getNewest = () => async(dispatch) => {
    try {
        dispatch({type:NEWEST_PRODUCTS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/latest`)

        dispatch({
            type:NEWEST_PRODUCTS_GET_SUCCESS,
            payload:JSON.parse(data['body'])
        })
    } catch (error) {
        dispatch({
            type:NEWEST_PRODUCTS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getOfferts = () => async(dispatch) => {
    try {
        dispatch({type:OFFERSTS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/offerts`)

        dispatch({
            type:OFFERSTS_GET_SUCCESS,
            payload:JSON.parse(data['body'])
        })
    } catch (error) {
        dispatch({
            type:OFFERSTS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getRecomendations = () => async(dispatch) => {
    try {
        dispatch({type:RECOMENDATIONS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/recomendations`)

        dispatch({
            type:RECOMENDATIONS_GET_SUCCESS,
            payload: JSON.parse(data['body'])
        })
    } catch (error) {
        dispatch({
            type: RECOMENDATIONS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getProductByCategory = (category = null, from = null, to = null) => async (dispatch) => {
    try {
      dispatch({ type: CATEGORY_PRODUCTS_GET_REQUEST });
  
      let url = `${host}/products/productcategory`;
  
      if (category) {
        url += `?category=${category}`;
      }
  
      if (from && to) {
        url += `${category ? "&" : "?"}from=${from}&to=${to}`;
      }
  
      const { data } = await axios.get(url);
  
      dispatch({
        type: CATEGORY_PRODUCTS_GET_SUCCESS,
        payload: JSON.parse(data['body']),
      });
    } catch (error) {
      dispatch({
        type: CATEGORY_PRODUCTS_GET_FAIL,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  

export const getCateforys = () => async(dispatch) => {
    try {
        dispatch({type:CATEGORYS_GET_REQUEST})

        const {data} = await axios.get(`${host}/products/categorys`)
        
        dispatch({
            type:CATEGORYS_GET_SUCCESS,
            payload: JSON.parse(data['body'])
        })                                
    } catch (error) {
        dispatch({
            type:CATEGORYS_GET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}