import {CATEGORYS_GET_FAIL,CATEGORYS_GET_REQUEST,CATEGORYS_GET_SUCCESS} from '../Constants/Category_constants'

export const CategorysReducer = (state = {categorys:[]}, action) => {
switch(action.type){
    case CATEGORYS_GET_REQUEST:
        return {loading:true, categorys:[]}
    case CATEGORYS_GET_SUCCESS:
        return {loading:false, categorys:action.payload}
    case CATEGORYS_GET_FAIL:
        return {loading:false, error:action.payload}
    default:
        return state
}
}