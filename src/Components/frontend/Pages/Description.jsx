// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import Footer from "./Footer";

// const Description = ({ addToCart }) => {
//   const { _id } = useParams();
//   const [item, setItem] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("");

//   useEffect(() => {
//     fetchItem();
//   }, []);

//   const fetchItem = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/womenfashion/${_id}`
//       );
//       if (!response.ok) {
//         console.log(
//           "Error fetching item:",
//           response.status,
//           response.statusText
//         );
//         return;
//       }
//       const data = await response.json();
//       setItem(data);
//     } catch (error) {
//       console.log("Error fetching item:", error);
//     }
//   };

//   if (!item) {
//     return (
//       <div className="flex justify-center items-center align-middle">
//         <FaSpinner size={80} />
//       </div>
//     );
//   }

// if (!item) {
//   return (
//     <div className="flex justify-center items-center align-middle">
//       <FaSpinner size={80} />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import Footer from "./Footer";
import { BsPlus } from "react-icons/bs";
const Description = ({ addToCart }) => {
  const { _id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/womenfashion?${_id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data[0]);
        setItem(data[0]);
      } catch (error) {
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [_id]);

  if (!item) {
    return (
      <div>
        <FaSpinner />
      </div>
    );
  }
  const sizeOptions = ["S", "M", "L", "XL"];

  return (
    <div className="">
      <h1>
        <b className="text-5xl italic text-orange-500 flex justify-center items-center mt-10 underline-offset-2 font-cursive">
          Item Description
        </b>
      </h1>
      <br />
      <h2 className="flex justify-center items-center">{item.name}</h2>
      <br />
      <p className="ml-10">{item.description}</p>
      <img
        className="w-[300px] flex justify-center items-center my-10 pl-20  "
        src={item.img}
        alt={item.name}
      />
      <p>price: ${item.price}</p>
      {/* Step 3: Handle size selection */}
      {/* <div className="ml-[350px] mr-[300px]">
        <label htmlFor="size" className="block font-bold mb-2">
          SELECT SIZE
        </label>
        <div className="flex">
          {sizeOptions.map((size) => (
            <div
              key={size}
              className={`flex justify-center items-center border border-pink-500 rounded-full shadow-3xl p-2 mx-2 cursor-pointer ${
                selectedSize === size
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
      </div> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          // Step 4: Pass the selectedSize along with the item to the addToCart function
          addToCart({ ...item, selectedSize });
        }}
      >
        <div className="relative top-0 flex justify-center items-center text-center ml-[650px] text-white hover:bg-orange-300 hover:text-white bg-red-500 w-[200px] h-[50px] text-xl  shadow-2xl rounded-lg mt-8 font-cursive">
          <BsPlus size={20} className="h-12 w-20" />
          Add to cart
        </div>
      </button>
      <Footer />
    </div>
  );
};

export default Description;
