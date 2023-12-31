import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/frontend/Pages/Navbar";
import Home from "./Components/frontend/Pages/Home";
// import Footer from "./Components/frontend/Pages/
import Product from "./Components/frontend/Pages/Product";
import Cart from "./Components/frontend/Pages/Cart";
import Dashboard from "./Components/frontend/Pages/Dashboard";
import Profile from "./Components/frontend/Pages/Profile";
import Orders from "./Components/frontend/Pages/Orders";
import Description from "./Components/frontend/Pages/Description";
import About from "./Components/frontend/Pages/About";
import SignUp from "./Components/frontend/Pages/SignUp";
import Signin from "./Components/frontend/Pages/Signin ";
import PasswordReset from "./Components/frontend/Pages/PasswordReset";
import ForgotPassword from "./Components/frontend/Pages/ForgotPassword";
import MyOrders from "./Components/frontend/Pages/MyOrders";
// import { AuthProvider } from "./Components/frontend/Pages/AuthContext";
import { useCart } from "./Components/frontend/Pages/CartContext";
import Contact from "./Components/frontend/Pages/ContactPage";
import UserDetails from "./Components/frontend/Pages/userDetails";
// import AdminProductEdit from "./Components/frontend/Pages/AdminProductEdit";
// import AdminProductList from "./Components/frontend/Pages/AdminProductList";
const App = () => {
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<MyOrders />} />
            {/* <Route path="/cart" element={<Cart cart={cart} />} /> */}
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/admin/products/edit/:id" element={AdminProductEdit} />
            <Route path="/admin/products" element={AdminProductList} /> */}
            <Route
              path="/womenfashion/:id"
              element={<Description addToCart={addToCart} />}
            />
            <Route path="/signin" element={<Signin />} />

            <Route
              path="/reset-password/:id/:token"
              element={<PasswordReset />}
            />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/userDetails" element={<UserDetails />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
