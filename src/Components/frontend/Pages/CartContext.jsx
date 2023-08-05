// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Function to add item to the cart
//   const addToCart = (item) => {
//     setCartItems((prevCartItems) => [...prevCartItems, item]);
//   };

//   // Function to calculate the total price of items in the cart
//   const getTotalPrice = () => {
//     const totalPrice = cartItems.reduce((total, item) => {
//       const itemPrice = parseInt(item.price);

//       return isNaN(itemPrice) ? total : total + itemPrice;
//     }, 0);
//     console.log("Total Price :", totalPrice);
//     return totalPrice.toFixed(2); // Return total price rounded to 2 decimal places
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, getTotalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export { CartProvider, useCart };

import { useContext, useState, createContext, useEffect } from "react";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let existingItem = localStorage.getItem("cart");
    if (existingItem) setCart(JSON.parse(existingItem));
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
