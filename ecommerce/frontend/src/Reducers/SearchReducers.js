import {SEARCH_PRODUCTS_GET_FAIL,
    SEARCH_PRODUCTS_GET_REQUEST,
    SEARCH_PRODUCTS_GET_SUCCESS  } from '../Constants/Product_constant'

export const SearchReducer = (state = {search:[]}, action) => {
switch(action.type){
    case SEARCH_PRODUCTS_GET_REQUEST:
        return {loading:true, search:[]}
    case SEARCH_PRODUCTS_GET_SUCCESS:
        return {loading:false, search:action.payload}
    case SEARCH_PRODUCTS_GET_FAIL:
        return {loading:false, error:action.payload}
    default:
        return state
}
}