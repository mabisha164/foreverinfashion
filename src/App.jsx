import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/frontend/Pages/Navbar";
import Home from "./Components/frontend/Pages/Home";
// import Footer from "./Components/frontend/Pages/Footer";
import Product from "./Components/frontend/Pages/Product";
import Cart from "./Components/frontend/Pages/Cart";
import Dashboard from "./Components/frontend/Pages/Dashboard";
import Description from "./Components/frontend/Pages/Description";
import About from "./Components/frontend/Pages/About";
import SignUp from "./Components/frontend/Pages/SignUp";
import Signin from "./Components/frontend/Pages/Signin ";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      setCartItems([...cartItems]);
      alert(`Item "${item.name}" added ${existingItem.quantity}X to the cart.`);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
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
            {/* <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  removeItem={removeItem}
                />
              }
            /> */}
            <Route path="/cart" element={<Cart />} />
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
