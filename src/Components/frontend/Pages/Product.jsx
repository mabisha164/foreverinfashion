import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import Rating from "./Rating";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Product = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useCart();

  // const [rating, setRating] = useState(0);

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

  const { addToCart } = useCart();
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

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };
  return (
    <>
      <div className="">
        <h1 className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-fantasy animate-pulse ">
          Women's Clothing Store
        </h1>
        <br />

        <div className=" flex justify-center mb-4 relative ">
          {/* <div className="absolute left-15  bg-green-500 h-9 w-8 ">
            <AiOutlineSearch size={30} color="purple " />
          </div> */}

          <select
            className=" w-96  py-2 px-14 rounded-2xl border-2 border-purple-400 font-custom text-xl text-pink-500 "
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" className="">
              All Categories
            </option>
            <option value="Sari">Sari</option>
            <option value="Kurtha">Kurtha</option>
            <option value="Jumpsuits">Jumpsuits</option>
            <option value="Blazers">Blazers</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="T-shirt">T-shirt</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
          {items
            .filter((item) =>
              selectedCategory ? item.CategoryName === selectedCategory : true
            )
            .map((item) => {
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

                        <h2 className="mb-2 absolute top-2 rounded-xl flex justify-center items-center text-xl font-cursive shadow-2xl text-white bg-orange-300 h-14 text-center">
                          {name}
                        </h2>

                        <div>
                          <h3 className="flex justify-center items-center text-2xl mt-10 font-italic font-sans text-green-600">
                            Price: Rs.{price}
                          </h3>
                        </div>
                      </div>

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
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, item])
                          );
                        }}
                        className="absolute bottom-3 ml-10"
                      >
                        <div className="  flex justify-center items-center text-xl font-cursive bg-blue-100 w-[300px] h-10 rounded-lg ">
                          <BsPlus size={15} className="h-10 w-24 " />
                          Add to cart
                        </div>
                      </button>
                      <h2>{CategoryName}</h2>
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
