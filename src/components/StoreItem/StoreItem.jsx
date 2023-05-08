import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./StoreItem.scss";
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="card">
      <div key={id} className="item">
        <img src={"/imgs/" + imgUrl} alt="" />
        <div className="bottom">
          <div className="row">
            <div className="name">{name}</div>
            <div className="price">{price} €</div>
          </div>
          <div className="rowCenter">
            <button className="button-lg" onClick={() => increaseQuantity(id)}>
              Add to Cart {quantity === 0 ? null : <span>({quantity})</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
