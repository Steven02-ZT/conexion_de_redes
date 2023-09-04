import {USER_EXTRAINFO_GET_REQUEST,USER_EXTRAINFO_GET_SUCCESS,USER_EXTRAINFO_GET_FAIL } from '../Constants/User_constants';

export const extraInfoReducer = (state = {}, action) => {
switch(action.type){
    case USER_EXTRAINFO_GET_REQUEST:
        return {loading:true,extraInfo:{}}

    case USER_EXTRAINFO_GET_SUCCESS:
        return {loading:false, extraInfo:action.payload }
    
    case USER_EXTRAINFO_GET_FAIL:
        return {loading:false, error: action.payload}

    default:
        return state
    }
}