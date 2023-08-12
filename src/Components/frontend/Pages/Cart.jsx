import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TbHttpDelete } from "react-icons/tb";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((cartItem) => {
        total = total + cartItem.price * (cartItem.quantity || 1);
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };
  const handleCheckout = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const orderDate = new Date().toISOString();
      const response = await fetch("http://localhost:8000/api/orderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: storedUserEmail,
          order_date: orderDate,
          order_data: cart,
        }),
      });

      if (response.ok) {
        setCart([]);
        localStorage.removeItem("cart");

        alert("Checkout successful!");
        navigate("/orders");
      } else {
        throw new Error("Checkout failed.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const removeItem = (itemId) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.id === itemId);
      myCart.splice(index, 1);
      setCart(myCart);

      localStorage.setItem("cart", JSON.stringify(myCart));
      alert("Item removed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl flex justify-center items-center mt-10 bg-rose-200 font-custom w-[420px] ml-[500px] h-14 rounded-md shadow-2xl  ">
        {cart?.length
          ? `You have ${cart.length} items in your cart `
          : "Your cart is empty"}
      </h1>
      <div className=" ">
        <div className="flex justify-center items-center mt-6">
          <table className="w-[50%]">
            <thead className="font-cursive">
              <tr>
                <th className="p-4">
                  <h1 className="text-2xl">Image</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Title</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Price</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Quantity</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Remove</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((cartItem) => (
                <tr key={cartItem.id}>
                  <Link to="/product">
                    {" "}
                    <td className="border p-4">
                      <img
                        src={cartItem.img}
                        alt={cartItem.name}
                        className="h-36"
                      />
                    </td>
                  </Link>
                  <td className="border p-4">{cartItem.name}</td>
                  <td className="border p-4">Rs.{cartItem.price}</td>
                  <td className="border p-4">
                    {/* <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max((quantities[item.id] || 0) + 1, 0)
                          )
                        }
                        className="bg-green-400 px-2 py-1 rounded-lg"
                      >
                        +
                      </button>
                      <span className="mx-2">{quantities[item.id] || 1}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max((quantities[item.id] || 0) - 1, 0)
                          )
                        }
                        className="bg-red-400 px-2 py-1 rounded-lg"
                      >
                        -
                      </button>
                    </div> */}
                    <p>Quantity: {cartItem.quantity}</p>
                  </td>
                  <td className="border p-4">
                    <button
                      type="button"
                      onClick={() => removeItem(cartItem.id)}
                      className="bg-red-400 px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="flex justify-center align-middle mt-10 text-3xl text-green-600 underline">
            Cart Summary
          </h1>
          <div className="mt-4">
            <p className="flex justify-center align-middle text-2xl">
              Total | Checkout | Payment
            </p>
            <h4 className="flex justify-center align-middle mt-6 text-xl">
              Total: Rs. {totalPrice()}
            </h4>
          </div>
          <div className="flex justify-center align-middle mt-6 text-xl ">
            <button
              onClick={() => handleCheckout(cart, setCart, navigate)}
              className="bg-red-500 h-10 w-28 rounded-xl shadow-2xl cursor-pointer text-white"
            >
              Checkout
            </button>
          </div>
          {/* <div className="flex justify-center align-middle mt-6 text-xl ">
            <button className="bg-red-500 h-10 w-28 rounded-xl shadow-2xl cursor-pointer text-white">
              Order
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
