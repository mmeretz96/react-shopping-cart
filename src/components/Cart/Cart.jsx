import React from "react";
import "./Cart.scss";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../CartItem/CartItem";
import storeItems from "../../data/items.json";
import { format } from "../../utilities/CurrencyFormatter";
const Cart = (props) => {
  const { cartItems, getItemQuantity } = useShoppingCart();

  const getStoreItem = (id) => {
    return storeItems.find((item) => item.id === id);
  };

  const getSum = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += getStoreItem(item.id).price * getItemQuantity(item.id);
    });
    return sum;
  };
  return (
    <div className="cart-container">
      <div className="overlay" onClick={props.toggleCart}></div>
      <div className="cart container">
        <div className="top">
          <h1>Cart</h1>
          {cartItems.map((item) => {
            let storeItem = getStoreItem(item.id);
            return (
              <CartItem
                id={storeItem.id}
                name={storeItem.name}
                price={storeItem.price}
              />
            );
          })}
          <div className="sum">
            <span>Sum</span>
            {format(getSum())}
          </div>
        </div>
        <button className="container">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
