import { 
    OFFERSTS_GET_FAIL,
    OFFERSTS_GET_REQUEST,
    OFFERSTS_GET_SUCCESS } from '../Constants/Product_constant'

export const OffertsReducer = (state = {offerts:[]},action) => {
    switch(action.type){
        case OFFERSTS_GET_REQUEST:
            return {loading:true,offerts:[]}
        
        case OFFERSTS_GET_SUCCESS:
            return {loading:false, offerts:action.payload}
        
        case OFFERSTS_GET_FAIL:
            return {loading:false, error:action.payload}
        
        default:
            return state
    }
}