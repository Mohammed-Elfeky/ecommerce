import {cartTypes} from './cartTypes'
export const addItem=(item)=>{
    return{
        type:cartTypes.ADD_ITEM,
        payload:item
    }
}

export const clearItem=(item)=>{
    return{
        type:cartTypes.CLEAR_ITEM,
        payload:item
    }
}

export const removeItem=(item)=>{
    return{
        type:cartTypes.REMOVE_ITEM,
        payload:item
    }
}

export const clearCart=()=>{
    return{
        type:cartTypes.CLEAR_CART,
    }
}
