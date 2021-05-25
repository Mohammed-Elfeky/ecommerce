import './CartItem.scss'
function CartItem({item}) {
  return (
    <div className="CartItem">
      <div className="imgPart">
          <img src={item.imageUrl} alt={item.name}/>
      </div>
      <div className="infoPart">
          <div className="name">{item.name}</div>
          <div className="price">{item.quantity} X {item.price}</div>
      </div>
    </div>
  );
}

export default CartItem;
