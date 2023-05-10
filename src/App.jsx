import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <ShoppingCartProvider>
      <Navbar toggleCart={toggleCart} />
      {cartOpen ? <Cart toggleCart={toggleCart} /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
