import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import Footer from "./Footer";
const Description = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log("Error fetching item:", error);
    }
  };

  if (!item) {
    return (
      <div className="flex justify-center items-center align-middle">
        <FaSpinner size={80} />
      </div>
    );
  }

  return (
    <div>
      <h1>
        <b className="text-black text-3xl italic font-sans flex justify-center items-center mt-10 underline-offset-2">
          Item Description
        </b>
      </h1>
      <br />
      <div className=" flex justify-center items-center my-10 pl-20  ">
        <img className="w-[200px]" src={item.image} alt={item.title} />
      </div>
      {/* <h2>${price}</h2> */}
      <h2 className="flex justify-center items-center">{item.title}</h2>
      <br />
      <p className="ml-36 mr-36">{item.description}</p>
      <button
        onClick={(e) => {
          e.preventDefault();

          addToCart(item);
        }}
      >
        <div className=" relative top-0 flex justify-center items-center text-center ml-[650px] text-black bg-blue-200 w-[200px] h-[50px] text-xl  shadow-2xl rounded-lg mt-4">
          {/* <BsPlus size={20} className=" h-12 w-20 " /> */}
          Add to cart
        </div>
      </button>
      <Footer />;
    </div>
  );
};

export default Description;
