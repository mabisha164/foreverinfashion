import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsDash } from "react-icons/bs";

const Cart = ({ cartItems, removeItem }) => {
  const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  const TotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * itemQuantities[item.id];
    });
    return totalPrice;
  };

  const handleIncrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: prevQuantities[itemId] + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    if (itemQuantities[itemId] > 0) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-green-200">
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
                <h1 className="text-xl">Actions</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border-2 px-4 py-2 rounded-2xl">
                  <img src={item.image} alt={item.title} className="h-36" />
                </td>
                <td className="border-2 px-6 py-6 rounded-2xl">{item.title}</td>
                <td className="border-2 rounded-2xl px-6 py-6">
                  ${item.price * itemQuantities[item.id]}
                </td>
                <td className="border-2 rounded-2xl px-6 py-6">
                  <div className="flex items-center">
                    {itemQuantities[item.id] > 0 ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.id)}
                          className="bg-blue-400 px-2 py-1 rounded-lg"
                        >
                          <BsDash />
                        </button>
                        <span className="mx-2">{itemQuantities[item.id]}</span>
                      </>
                    ) : (
                      <span>0</span>
                    )}
                    <button
                      type="button"
                      onClick={() => handleIncrement(item.id)}
                      className="bg-blue-400 px-2 py-1 rounded-lg"
                    >
                      <BsPlus />
                    </button>
                  </div>
                </td>
                <td className="  border-2 rounded-2xl px-6 py-6">
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="bg-red-400 px-4 py-2 ml-2 rounded-lg"
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
          <h1 className="text-2xl ">Total Price : $ {TotalPrice()}</h1>
        </p>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
