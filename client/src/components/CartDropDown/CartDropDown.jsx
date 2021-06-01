import './CartDropDown.scss'
import MyButton from '../MyButton/MyButton'
import CartItem from '../CartItem/CartItem'
import {connect} from 'react-redux'
import {cartItemsSelector} from '../../Redux/cart/cartSelectors'
import {withRouter} from 'react-router-dom'
function CartDropDown({cartItems,history}) {
    return (
        <div className="CartDropDown">
            {
                cartItems.map((cartItem)=>{
                    return <CartItem key={cartItem.id} item={cartItem} />
                })
            }
            <MyButton onClick={()=>{history.push('/checkout')}} isCheckOut content="checkout"/>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        cartItems:cartItemsSelector(state)
    }
}
export default withRouter(connect(mapStateToProps)(CartDropDown))
