import "./CheckOutItem.scss";
import { connect } from "react-redux";
import { clearItem, addItem ,removeItem} from "../../Redux/cart/cartActions";
function CheckOutItem({ item, isHeader, clearItem, addItem ,removeItem}) {
  return (
    <div className="CheckOutItem">
      <div className="imagePart">
        {isHeader ? "product" : <img src={item.imageUrl} alt={item.name} />}
      </div>
      <div className="description">{isHeader ? "description" : item.name}</div>
      {isHeader ? (
        <div className="quantity">quantity</div>
      ) : (
        <div className="quantity alignHorizontal">
          <div className="leftArrow" onClick={()=>{removeItem(item)}} >&#10094;</div>
          <div className="quantityCount">{item.quantity}</div>
          <div
            className="rightArraow"
            onClick={() => {
              addItem(item);
            }}
          >
            &#10095;
          </div>
        </div>
      )}
      <div className="quantity">{isHeader ? "quantity" : item.quantity}</div>
      <div className="price">{isHeader ? "price" : item.price}</div>
      <div className="remove">
        {isHeader ? (
          "remove"
        ) : (
          <div
            onClick={() => {
              clearItem(item);
            }}
          >
            X
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(null, { clearItem, addItem,removeItem })(CheckOutItem);
