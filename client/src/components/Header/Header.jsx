import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
import "./Header.scss";
import CartDropDown from "../CartDropDown/CartDropDown";
import { connect } from "react-redux";
import { cartItemsCountSelector } from "../../Redux/cart/cartSelectors";
import { currentUserSelctor } from "../../Redux/user/userSelectors";
import { createStructuredSelector } from "reselect";
import {signOutStart} from '../../Redux/user/userActions'

function Header({ currentUser, cartItemsCount,signOutStart }) {
  //show and hide dropdown
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  return (
    <div className="Header">
      <Link className="logo-container" to="/">
        home
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <div
          onClick={() => {
            setIsDropDownVisible((prevState) => !prevState);
          }}
          className="option"
        >
          {cartItemsCount}
        </div>
      </div>
      {isDropDownVisible ? <CartDropDown /> : ""}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelctor,
  cartItemsCount: cartItemsCountSelector,
});
export default connect(mapStateToProps,{signOutStart})(Header);
