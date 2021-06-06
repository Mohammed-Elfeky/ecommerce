import React from "react";
import "./CheckOut.scss";
import CheckOutItem from "../CheckOutItem/CheckOutItem";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  cartItemsTotalSelector,
} from "../../Redux/cart/cartSelectors";
import { connect } from "react-redux";
import StripeCheckoutButton from "../StripeCheckoutButton/StripeCheckoutButton";
function CheckOut({ cartItems, cartItemTotal }) {
  return (
    <div className="CheckOut">
      <CheckOutItem isHeader />
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} item={cartItem} />;
      })}
      <h1 className="totalContainer">Total:{cartItemTotal}</h1>
      <h2 style={{fontWeight:'100',color:'red',textAlign:'center',marginTop:'10px'}}>card:4242424242424242 ,CVC:123, DATE:09/21</h2>
      <div className="checkoutButtonContainer">
        <StripeCheckoutButton price={cartItemTotal} />
      </div>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  cartItemTotal: cartItemsTotalSelector,
});
export default connect(mapStateToProps)(CheckOut);
