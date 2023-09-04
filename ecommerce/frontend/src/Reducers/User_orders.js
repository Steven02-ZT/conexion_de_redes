import { 
    GET_ORDERS_REQUESTS,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL
 } from '../Constants/Order_constants'

export const UserOrders = (state = {},action) => {
    switch (action.type) {
        case GET_ORDERS_REQUESTS:
            return {loading:true,orders:[]}
        case GET_ORDERS_SUCCESS:
            return {loading:false,orders:action.payload}
        case GET_ORDERS_FAIL:
            return {loading:false,error:action.payload}
        default:
           return state
    }
}