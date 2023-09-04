import { 
    CATEGORY_PRODUCTS_GET_REQUEST, 
    CATEGORY_PRODUCTS_GET_SUCCESS,
    CATEGORY_PRODUCTS_GET_FAIL} from '../Constants/Product_constant'

export const categoryProductsReducer = (state = {categoryProducts:[]},action) => {
    switch (action.type) {
        case CATEGORY_PRODUCTS_GET_REQUEST:
            return {loading:true, categoryProducts:[]}
        
        case CATEGORY_PRODUCTS_GET_SUCCESS:
            return {loading:false, categoryProducts:action.payload}

        case CATEGORY_PRODUCTS_GET_FAIL:
            return {loading:false, error: action.payload}
    
        default:
            return state
    }
}