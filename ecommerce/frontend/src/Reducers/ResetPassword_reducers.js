import { 
    RESET_CODE_GET_FAIL,
    RESET_CODE_GET_REQUEST,
    RESET_CODE_GET_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS
 } from '../Constants/ResetPassword_constants'

 export const PasswordReducer = (state = {reset:{}},action) => {
    switch (action.type) {
        case RESET_CODE_GET_REQUEST:
            return {loading:true}

        case RESET_CODE_GET_SUCCESS:
            return {loading:false, reset:action.payload}

        case RESET_CODE_GET_FAIL:
            return {loading:false, error: action.payload}
        
        case RESET_PASSWORD_REQUEST:
            return {loading:true}

        case RESET_PASSWORD_SUCCESS:
            return {loading:false, reset:action.payload}

        case RESET_PASSWORD_FAIL:
            return {loading:false, error: action.payload}
    
        default:
            return state
    }
}