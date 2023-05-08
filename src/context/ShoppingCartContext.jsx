import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getNumberOfItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
