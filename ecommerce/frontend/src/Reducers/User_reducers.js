import {USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    GET_TOKEN_AUTHENTICATION_FAIL,
    GET_TOKEN_AUTHENTICATION_SUCCESS,
    GET_TOKEN_AUTHENTICATION_REQUEST,
    GET_USERINFO_REQUEST,
    GET_USERINFO_SUCCESS,
    GET_USERINFO_FAIL,
    ERROR} from '../Constants/User_constants';

export const userLoginReducer = (state = {}, action) => {
switch(action.type){
    case USER_LOGOUT_REQUEST:
            return {loading:true}

    case USER_LOGOUT_SUCCESS:
            return {loading:false, userInfo:action.payload}

    case USER_LOGOUT_FAIL:
            return {loading:false, error:action.payload}

    case GET_TOKEN_AUTHENTICATION_REQUEST:
        return {loading:true}
    
    case GET_TOKEN_AUTHENTICATION_SUCCESS:
        return {loading:false,tokens:action.payload}

    case GET_TOKEN_AUTHENTICATION_FAIL:
        return {loading:false, error:action.payload}

    case GET_USERINFO_REQUEST:
        return {
            ...state,
            loading:true
        }
        
    case GET_USERINFO_SUCCESS:
        return {
            ...state,
            loading:false, 
            userInfo:action.payload
        }
    
    case ERROR:
        return {
            ...state,
            loading:false, 
            error:action.payload
        }

    default:
        return state
    }
}