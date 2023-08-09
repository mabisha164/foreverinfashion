import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useCart, CartContext } from "./CartContext";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";

import { BsPlus } from "react-icons/bs";
const Description = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [cart, setCart] = useCart();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/womenfashion/${id}`
      );
      if (!response.ok) {
        console.log(
          "Error fetching item:",
          response.status,
          response.statusText
        );
        return;
      }
      const data = await response.json();

      setItem(data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };

  if (!item) {
    return (
      <div>
        <FaSpinner />
      </div>
    );
  }

  const { name, img, description, price } = item;
  return (
    <div className="ml-36">
      <h1>
        <b className="text-5xl italic text-orange-500 flex justify-center underline items-center mt-4 underline-offset-2 font-cursive">
          Item Description
        </b>
      </h1>
      <div className="flex mt-10 bg-blue-100 w-[80%] mb-6 ml-16 rounded-2xl shadow-2xl">
        <div className="flex ">
          <br />
          <div className="    border-2  border-white rounded-2xl shadow-2xl w-[400px] ml-6">
            <img className="w-[400px]  rounded-xl  " src={img} alt={name} />
          </div>
        </div>

        <div className="">
          <h2 className=" text-4xl mt-20  font-cursive underline hover:underline-offset-4 ml-16">
            {name}
          </h2>
          <br />
          <p className="  text-xl   font-italic  leading-relaxed mr-16 ml-16">
            {description}
          </p>
          <div className="flex">
            <h1 className=" absolute mt-6 mr-16 arounded-xl  ml-16 text-3xl font-cursive text-orange-600 h-10 w-36 text-center rounded-2xl shadow-2xl ">
              Rs. {price}
            </h1>
          </div>
          <div>
            <button
              onClick={() => {
                const existingItem = cart.find(
                  (cartItem) => cartItem._id === item._id
                );

                if (existingItem) {
                  const updatedCart = cart.map((cartItem) =>
                    cartItem._id === item._id
                      ? {
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                        }
                      : cartItem
                  );
                  setCart(updatedCart);
                } else {
                  const newItem = { ...item, quantity: 1 };
                  setCart([...cart, newItem]);
                }
                alert("Item added to cart");
                localStorage.setItem("cart", JSON.stringify([...cart, item]));
              }}
            >
              <div className="relative top-0 flex justify-center items-center text-center mt-24 text-white hover:bg-orange-300 hover:text-white bg-red-400 w-[200px] h-[50px] text-xl  shadow-2xl rounded-lg font-cursive ml-16">
                <BsPlus size={20} className="h-12 w-20" />
                Add to cart
              </div>
            </button>
          </div>
          <div className="ml-16 mt-10 ">
            <Link to="/product" className="underline ">
              Back to page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
