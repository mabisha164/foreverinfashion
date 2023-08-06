import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/frontend/Pages/Navbar";
import Home from "./Components/frontend/Pages/Home";
// import Footer from "./Components/frontend/Pages/Footer";
import Product from "./Components/frontend/Pages/Product";
import Cart from "./Components/frontend/Pages/Cart";
import Dashboard from "./Components/frontend/Pages/Dashboard";
import Profile from "./Components/frontend/Pages/Profile";
import Orders from "./Components/frontend/Pages/Orders";
import Description from "./Components/frontend/Pages/Description";
import About from "./Components/frontend/Pages/About";
import SignUp from "./Components/frontend/Pages/SignUp";
import Signin from "./Components/frontend/Pages/Signin ";
import { useCart } from "./Components/frontend/Pages/CartContext";
const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useCart();
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
      alert(`Item "${item.name}" added ${existingItem.quantity}X to the cart.`);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      alert(`Item "${item.name}" added to the cart.`);
    }
  };

  const handleLogout = () => () => {
    setLoggedIn(false);
    localStorage.clear();
  };
  return (
    <>
      <div className="bg-white w-full h-screen ">
        <BrowserRouter>
          <Navbar handleLogout={handleLogout} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/"
              element={<Product addToCart={addToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<Orders />} />
            {/* <Route path="/cart" element={<Cart cart={cart} />} /> */}
            <Route path="/cart" element={<Cart addToCart={addToCart} />} />
            <Route
              path="/womenfashion/:id"
              element={<Description addToCart={addToCart} />}
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
