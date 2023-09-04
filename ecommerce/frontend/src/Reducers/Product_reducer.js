import {PRODUCT_GET_FAIL,
        PRODUCT_GET_REQUEST,
        PRODUCT_GET_SUCCESS  } from '../Constants/Product_constant'

export const ProductReducer = (state = {product:[]}, action) => {
    switch(action.type){
        case PRODUCT_GET_REQUEST:
            return {loading:true, product:[]}
        case PRODUCT_GET_SUCCESS:
            return {loading:false, product:action.payload}
        case PRODUCT_GET_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}