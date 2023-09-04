import { configureStore,combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { userLoginReducer } from './Reducers/User_reducers'
import { ProductsReducer } from './Reducers/ListProducts_reducers'
import { ProductReducer } from './Reducers/Product_reducer'
import { cartReducer } from './Reducers/Cart_reducers'
import {newestReducers} from './Reducers/Newest_reducers'
import { OffertsReducer } from './Reducers/Offerts_reducers'
import { RecomendationsReducer } from './Reducers/Recomendations_reducers'
import { categoryProductsReducer } from './Reducers/CategoryProducts_reducers'
import { SearchReducer } from './Reducers/SearchReducers'
import { CategorysReducer } from './Reducers/Categorys_reduces'
import { orderReducer,orderDetailsReducer,orderPaidReducer } from './Reducers/Order_reducers'
import {UserOrders} from './Reducers/User_orders'

import MonthExpirationMiddleware from './middlewares/MonthExpirationMiddleware'
import TokenExpirationMiddleware from './middlewares/TokenExpirationMiddleware'

const reducer = combineReducers({
    user: userLoginReducer,
    listProducts: ProductsReducer,
    product: ProductReducer,
    cart:cartReducer,
    newest: newestReducers,
    offerts: OffertsReducer,
    recomendations: RecomendationsReducer,
    categoryProducts: categoryProductsReducer,
    search: SearchReducer,
    categorys: CategorysReducer,
    order: orderReducer,
    orderDetails: orderDetailsReducer,
    orderPaid:orderPaidReducer,
    userOrders:UserOrders,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddresFromStorage = localStorage.getItem('shippingAddress') ? 
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    user: {userInfo: userInfoFromStorage},
    cart: {cartItems: cartItemsFromStorage, shippingAddress: shippingAddresFromStorage},

}

const store = configureStore({
    reducer,
    preloadedState:initialState,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
    .concat(MonthExpirationMiddleware)
    .concat(TokenExpirationMiddleware)
})

export default store