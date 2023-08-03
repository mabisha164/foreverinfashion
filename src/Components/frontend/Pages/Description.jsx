import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";

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
    <div className="">
      <h1>
        <b className="text-5xl italic text-orange-500 flex justify-center items-center mt-4 underline-offset-2 font-cursive">
          Item Description
        </b>
      </h1>
      <div className="flex ">
        <div className="flex ">
          <br />
          <div className=" my-4  border-4  border-white rounded-2xl shadow-2xl w-[450px] ml-36">
            <img
              className="w-[450px] mr-10  rounded-xl  "
              src={img}
              alt={name}
            />
          </div>
        </div>
        {/* <div className="">
          <h1 className=" absolute bottom-0 ml-10 rounded-xl shadow-2xl right-1/2 left-1/2 text-3xl bg-green-200 h-10 w-36 text-center">
            {price}
          </h1>
        </div> */}
        <div className="ml-10">
          <h2 className=" text-3xl mt-6 ml-5 font-cursive underline hover:underline-offset-4">
            {name}
          </h2>
          <br />
          <p className="  text-xl   font-italic  leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();

            addToCart({ ...item, selectedSize });
          }}
        >
          <div className="relative top-0 flex justify-center items-center text-center ml-[650px] text-white hover:bg-orange-300 hover:text-white bg-red-500 w-[200px] h-[50px] text-xl  shadow-2xl rounded-lg font-cursive">
            <BsPlus size={20} className="h-12 w-20" />
            Add to cart
          </div>
        </button>
      </div>
    </div>
  );
};

export default Description;
