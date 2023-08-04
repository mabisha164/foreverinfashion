import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Product = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/womenfashion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setItems(data[0]);
      } catch (error) {
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <ImSpinner9
          className="animate-spin text-4xl text-gray-500"
          size={100}
          color="red"
        />
      </div>
    );
  }

  // Filter items based on the search query
  // const filteredItems = items.filter((item) =>
  //   item.CategoryName.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      <div className="bg-orange-50">
        <h1 className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-fantasy animate-pulse ">
          Women's Clothing Store
        </h1>
        <br />

        {/* Search bar */}
        {/* <div className="flex justify-center items-center p-4">
          <select
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-4 w-[300px] border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="sari">Sari</option>
            <option value="kurtha">Kurtha</option>
            <option value="tops&jeans">Tops & Jeans</option>
            <option value="jacket">Jacket</option>
            <option value="jumpsuit">Jumpsuit</option>
          </select>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
          {items.map((item) => {
            const { _id, img, name, CategoryName, description, price } = item;
            return (
              <Link to={`/womenfashion/${_id}`}>
                <div className="mt-10">
                  <br />
                  <div className="border border-[white] h-[600px] w-[400px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
                    <div className="w-full h-full ">
                      <div
                        className="bg-white height-[300] relative "
                        key={item._id}
                      >
                        <img
                          className="h-[450px] w-[400px]  flex justify-center items-center  group-hover:scale-110 rounded-xl"
                          src={img}
                        />
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(item);
                          alert("Item added to cart!!!");
                        }}
                        className="absolute bottom-3 ml-10"
                      >
                        <div className="  flex justify-center items-center text-xl font-cursive bg-blue-100 w-[300px] h-10 rounded-lg ">
                          <BsPlus size={15} className="h-10 w-24 " />
                          Add to cart
                        </div>
                      </button>
                      <h2 className="mb-2 absolute top-2 rounded-xl flex justify-center items-center text-xl font-cursive  text-white bg-orange-300 h-14 text-center">
                        {name}
                      </h2>
                      <h3 className="flex justify-center items-center text-2xl mt-10 font-italic">
                        Price:{price}
                      </h3>
                    </div>
                    {/* <h2>{CategoryName}</h2> */}
                  </div>
                  <br />
                </div>{" "}
              </Link>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Product;
