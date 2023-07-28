import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { BsPlus, BsTrash } from "react-icons/bs";
// import Footer from "./Footer";
// const Cart = ({ cartItems }) => {

const Cart = ({ cartItems, removeItem }) => {
  const TotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  // const removeItem = (itemId) => {
  //   const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  //   removeFromCart(updatedCartItems);
  // };
  return (
    <>
      <div className="flex justify-center items-center">
        <table className="table-auto ml-10 r">
          <thead>
            <tr>
              <th className="px-6 py-6 ">
                <h1 className="text-xl ">Image</h1>
              </th>
              <th className="px-6 py-6 ">
                <h1 className="text-xl mr-10 ">Title</h1>
              </th>
              <th className="px-6 py-6 ">
                <h1 className="text-xl mr-20">Price</h1>
              </th>
              <th className="px-6 py-6">
                <h1 className="text-xl">Quantity</h1>
              </th>
              <th className="px-6 py-6 ">
                <h1 className="text-xl">Remove</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">
                  <img src={item.image} alt={item.title} className="h-36" />
                </td>
                <td className="border px-6 py-6">{item.title}</td>
                <td className="border px-6 py-6">${item.price}</td>
                <td className="border px-6 py-6">{item.quantity}</td>
                <td className="border px-6 py-6">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="bg-red-400 px-6 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cartItems.length > 0 && (
        <p className="ml-10 mt-4 flex justify-center items-center">
          <h1>Total Price: ${TotalPrice()}</h1>
        </p>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
