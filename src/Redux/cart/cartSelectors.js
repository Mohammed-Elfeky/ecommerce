import {createSelector} from 'reselect'

const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
)

export const cartItemsCountSelector=createSelector(
    [cartItemsSelector],
    cartItems=>cartItems.reduce((initial,cartItem)=>{
        return initial + cartItem.quantity
    },0)
)

export const cartItemsTotalSelector=createSelector(
    [cartItemsSelector],
    cartItems=>cartItems.reduce((initial,cartItem)=>{
        return initial+(cartItem.quantity*cartItem.price)
    },0)
)