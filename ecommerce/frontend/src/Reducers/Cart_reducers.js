import {ITEM_ADD_CART,ITEM_REMOVE_CART,
        CART_SAVE_SHIPPING_ADDRESS,
        SAVE_PAYMENT_METHOD,
        ORDER_INFO_SAVE,
        CART_CLEAR_ITEMS
    }from "../Constants/Cart_constants"

export const cartReducer = (state = {cartItems:[], shippingAddress:{}}, action) => {
    switch(action.type){
        case ITEM_ADD_CART:
            const item = action.payload
            const existsItem = state.cartItems.find(x => x.product === item.product)

            if (existsItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existsItem.product ? item : x
                    )
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }

        case ITEM_REMOVE_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }

        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        case ORDER_INFO_SAVE:
            return{
                ...state,
                itemsPrice: action.payload['itemsPrice'],
                shippingPrice: action.payload['shippingPrice'],
                totalPrice: action.payload['totalPrice']

            }

        case CART_CLEAR_ITEMS:
            return{
                ...state,
                cartItems:[]
            }

        default:
            return state
    }
}