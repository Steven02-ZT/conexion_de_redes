import { 
    PRODUCTS_GET_FAIL, 
    PRODUCTS_GET_SUCCESS, 
    PRODUCTS_GET_REQUEST,
   } from '../Constants/Product_constant'

export const ProductsReducer = (state = {listProducts:[]}, action) => {
    switch(action.type){
        case PRODUCTS_GET_REQUEST:
            return {loading:true, listProducts:[]}
        case PRODUCTS_GET_SUCCESS:
            return {loading:false, listProducts:action.payload}
        case PRODUCTS_GET_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}