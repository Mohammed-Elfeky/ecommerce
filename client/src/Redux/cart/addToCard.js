export const addToCard = (existingCartItems, sentItem) => {
    //check if the new sent item exists in the card or not 
    const newItemExists = existingCartItems.find(cartItem => cartItem.id === sentItem.id)

    //if the item exists add 1 to the quantity of the item and return the cart items array
    if (newItemExists) {
        return existingCartItems.map(cartItem => {
            if (cartItem.id === sentItem.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            }else{
                return cartItem
            }
        })
    }

    //if the item doesnt exist add the new item to the old array
    //and set the quantity to 1
    //and return the array 
    return [...existingCartItems,{...sentItem,quantity:1}]
}