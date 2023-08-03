import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

const Description = ({ addToCart }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  const { name, img, description, price } = item;
  return (
    <div className="">
      <h1>
        <b className="text-5xl italic text-orange-500 flex justify-center items-center mt-10 underline-offset-2 font-cursive">
          Item Description
        </b>
      </h1>
      <br />
      <div className="flex justify-center items-center my-10 pl-20 border-4 border-white rounded-2xl shadow-2xl w-[400px] ml-[500px]">
        <img className="w-[250px] mr-10" src={img} alt={name} />
      </div>
      <h2>{price}</h2>
      <h2 className="flex justify-center items-center text-3xl ml-5 font-cursive underline hover:underline-offset-4">
        {name}
      </h2>
      <br />
      <p className="ml-[350px] mr-[300px] text-l font-italic border-2 border-white rounded-2xl shadow-2xl w-[50%] leading-relaxed">
        {description}
      </p>

      <button
        onClick={(e) => {
          e.preventDefault();

          addToCart({ ...item });
        }}
      >
        <div className="relative top-0 flex justify-center items-center text-center ml-[650px] text-white hover:bg-orange-300 hover:text-white bg-red-500 w-[200px] h-[50px] text-xl  shadow-2xl rounded-lg mt-8 font-cursive">
          <BsPlus size={20} className="h-12 w-20" />
          Add to cart
        </div>
      </button>
    </div>
  );
};

export default Description;
