import { hasPassedAHour,updateTokens } from "../Actions/User_actions";

import {ORDER_DETAILS_REQUEST,
        ORDER_CREATE_REQUEST,
        ORDER_PAY_REQUEST,
        GET_ORDERS_REQUESTS } from "../Constants/Order_constants";

const TokenExpirationMiddleware = store => next => action => {
    if (action.type === ORDER_DETAILS_REQUEST ||
        action.type === ORDER_CREATE_REQUEST ||
        action.type === ORDER_PAY_REQUEST ||
        action.type === GET_ORDERS_REQUESTS ) {
        if(hasPassedAHour()){
            updateTokens()
            return;
        }
        return next(action)
    }

    return next(action)
}

export default TokenExpirationMiddleware