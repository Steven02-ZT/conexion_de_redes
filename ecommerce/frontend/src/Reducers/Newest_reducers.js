import {NEWEST_PRODUCTS_GET_FAIL,
        NEWEST_PRODUCTS_GET_REQUEST,
        NEWEST_PRODUCTS_GET_SUCCESS} from "../Constants/Product_constant"

export const newestReducers = (state = {newest:[]},action) => {
    switch (action.type) {
        case NEWEST_PRODUCTS_GET_REQUEST:
            return {loading:true,newest:[]}
        case NEWEST_PRODUCTS_GET_SUCCESS:
            return {loading:false, newest:action.payload}
        case NEWEST_PRODUCTS_GET_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}