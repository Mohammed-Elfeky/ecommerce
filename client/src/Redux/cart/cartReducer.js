import {
    cartTypes
} from './cartTypes'
import {
    addToCard
} from './addToCard'
import {removeOneFromCard} from './removeOneFromCard'
const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addToCard(state.cartItems, action.payload)
            }
        case cartTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeOneFromCard(state.cartItems,action.payload)
            }
        case cartTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
        default:
            return state;
    }
}

export default cartReducer;