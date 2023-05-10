import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    console.log(cartOpen);
  };

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null)
        return [...currItems, { id: id, quantity: 1 }];
      return currItems.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1)
        return currItems.filter((item) => item.id !== id);
      return currItems.map((item) => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const getNumberOfItems = () => cartItems.length;

  const getCartOpen = () => {
    return cartOpen;
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getNumberOfItems,
        cartItems,
        toggleCart,
        getCartOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
