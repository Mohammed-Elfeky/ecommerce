export const removeOneFromCard=(existingCartItems, sentItem)=>{
    //get the item that we want to decrese its quantity  by 1
    const cartItemQuantity=existingCartItems.find(cartItem => cartItem.id === sentItem.id).quantity

    //if the quantity of the item is 1 remove it from cart list
    if(cartItemQuantity === 1){
        return existingCartItems.filter(cartItem=>cartItem.id !== sentItem.id)
    }

    //if not decrese the quantity by one
    return existingCartItems.map(cartItem=>{
        if(cartItem.id === sentItem.id){
            return {...cartItem,quantity:cartItem.quantity-1}
        }else{
            return cartItem;
        }
    })

}