import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./CartItem.scss";
import { format } from "../../utilities/CurrencyFormatter";
const CartItem = ({ id, name, price }) => {
  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="cart-item ">
      <div className="row">
        <div className="quant">{quantity} </div>
        <div className="name">{name}</div>
        <div className="price">{format(price * quantity)}</div>
      </div>
      <div className="row">
        <button
          onClick={() => {
            decreaseQuantity(id);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            increaseQuantity(id);
          }}
        >
          +
        </button>
        <button
          className="danger"
          onClick={() => {
            removeFromCart(id);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
