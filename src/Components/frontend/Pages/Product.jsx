// import React, { useState, useEffect } from "react";
// import { BsPlus } from "react-icons/bs";
// import { ImSpinner9 } from "react-icons/im";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import { useCart } from "./CartContext";
// import { PiShoppingCartSimpleThin } from "react-icons/pi";
// import ReactPaginate from "react-paginate";

// const Product = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const [cart, setCart] = useCart();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/api/womenfashion", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const data = await response.json();
//         setItems(data[0]);
//       } catch (error) {
//         console.log("Error fetching items:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <ImSpinner9
//           className="animate-spin text-4xl text-gray-500"
//           size={100}
//           color="red"
//         />
//       </div>
//     );
//   }
//   const handlePageClick = (e) => {
//     console.log(e);
//   };
//   return (
//     <>
//       <div className="">
//         <h1 className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-400 font-custom animate-pulse ">
//           Women's Clothing Store
//         </h1>
//         <br />

//         <div className=" flex justify-center mb-4 relative ">
//           <select
//             className="w-96 py-2 px-14 rounded-2xl border-2 border-purple-400 font-custom text-xl text-pink-500"
//             onChange={(e) => setSelectedCategory(e.target.value)}
//           >
//             <option value="">All Categories</option>
//             <option value="Sari">Sari</option>
//             <option value="Kurtha">Kurtha</option>
//             <option value="Jumpsuits">Jumpsuits</option>
//             <option value="Blazers">Blazers</option>
//             <option value="Jeans">Jeans</option>
//             <option value="Jackets">Jackets</option>
//             <option value="T-shirt">T-shirt</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
//           {items
//             .filter((item) =>
//               selectedCategory ? item.CategoryName === selectedCategory : true
//             )
//             .map((item) => {
//               const { _id, img, name, CategoryName, price } = item;

//               return (
//                 <div className="mt-10" key={_id}>
//                   <div className="border border-[white] h-[600px] w-[400px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
//                     <div className="w-full h-full">
//                       <Link to={`/womenfashion/${_id}`}>
//                         <img
//                           className="h-[470px] w-[400px] flex justify-center items-center group-hover:scale-110 rounded-xl"
//                           src={img}
//                           alt={name}
//                         />
//                       </Link>
//                     </div>

//                     <h2 className="mb-2 absolute top-2 rounded-xl flex justify-center items-center text-xl font-cursive shadow-2xl text-white bg-orange-400 h-14 text-center">
//                       {name}
//                     </h2>
//                     <div>
//                       <h3 className="flex justify-center items-center text-2xl mt-10 font-custom text-black absolute bottom-16 ml-[95px] mb-2">
//                         Price: Rs.{price}
//                       </h3>
//                     </div>

//                     <button
//                       onClick={() => {
//                         const existingItem = cart.find(
//                           (cartItem) => cartItem._id === item._id
//                         );

//                         if (existingItem) {
//                           const updatedCart = cart.map((cartItem) =>
//                             cartItem._id === item._id
//                               ? {
//                                   ...cartItem,
//                                   quantity: cartItem.quantity + 1,
//                                 }
//                               : cartItem
//                           );
//                           setCart(updatedCart);
//                         } else {
//                           const newItem = { ...item, quantity: 1 };
//                           setCart([...cart, newItem]);
//                         }

//                         alert("Item added to cart");
//                         localStorage.setItem(
//                           "cart",
//                           JSON.stringify([...cart, item])
//                         );
//                       }}
//                       className="absolute bottom-3 ml-10"
//                     >
//                       <div className="flex justify-center items-center text-xl font-cursive ml-8 bg-blue-100 w-[250px] h-10 rounded-lg">
//                         <BsPlus size={15} className="h-10 w-24" />
//                         Add to cart
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//         {/* <Footer /> */}
//         <ReactPaginate
//           breakLabel="..."
//           nextLabel="next >"
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={5}
//           pageCount={8}
//           previousLabel="< previous"
//           renderOnZeroPageCount={null}
//           marginPagesDisplayed={2}
//           containerClassName="pagination flex justify-center items-center mt-4"
//           pageClassName="page-item"
//           pageLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
//           previousClassName="page-item"
//           previousLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
//           nextClassName="page-item"
//           nextLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300"
//           activeClassName="bg-blue-500 text-white"
//         />
//       </div>
//     </>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "./CartContext";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedSize, setSelectedSize] = useState({});

  const [cart, setCart] = useCart();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/paginateProducts?page=${currentPage}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [currentPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9
          className="animate-spin text-4xl text-gray-500"
          size={100}
          color="red"
        />
      </div>
    );
  }
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };
  return (
    <>
      <div className="">
        <h1 className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-400 font-custom animate-pulse ">
          Women's Clothing Store
        </h1>
        <br />

        <div className=" flex justify-center mb-4 relative ">
          <select
            className="w-96 py-2 px-14 rounded-2xl border-2 border-purple-400 font-custom text-xl text-pink-500"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Sari">Sari</option>
            <option value="Kurtha">Kurtha</option>
            <option value="Jumpsuits">Jumpsuits</option>
            <option value="Blazers">Blazers</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
          {items
            .filter((item) =>
              selectedCategory ? item.CategoryName === selectedCategory : true
            )
            .map((item) => {
              const { _id, img, name, CategoryName, price } = item;

              return (
                <div className="mt-10" key={_id}>
                  <div className="border border-[white] h-[550px] w-[350px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
                    <div className="w-full h-full">
                      <Link to={`/womenfashion/${_id}`}>
                        <img
                          className="h-[400px] w-[350px] flex justify-center items-center group-hover:scale-110 rounded-xl"
                          src={img}
                          alt={name}
                        />
                      </Link>
                    </div>

                    <h2 className="mb-2 absolute top-2 rounded-xl flex justify-center items-center text-xl font-cursive shadow-2xl text-white bg-orange-400 h-14 text-center">
                      {name}
                    </h2>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="flex justify-center items-center text-xl  font-custom text-gray-600 absolute bottom-16 ml-6 mb-2 ">
                          Price: Rs.{price}
                        </h3>
                      </div>
                      <div className=" font-custom text-black absolute right-28  mb-4 ">
                        {selectedCategory === "Sari" ? (
                          <select
                            id={`color-${_id}`}
                            className="block w-[90px] py-1 px-3 rounded-md border border-blue-400  text-lg font-custom text-gray-600  justify-center items-center  mt-10  absolute bottom-16  mb-2  "
                            onChange={(e) =>
                              setSelectedCategory((prevSelectedCategory) => ({
                                ...prevSelectedCategory,
                                [_id]: e.target.value,
                              }))
                            }
                            value={selectedCategory[_id] || ""}
                          >
                            <option value="">Color</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            {/* Add more color options as needed */}
                          </select>
                        ) : (
                          <select
                            id={`size-${_id}`}
                            className="block w-[90px] py-1 px-3 rounded-md border border-blue-400  text-lg font-custom text-gray-600  justify-center items-center  mt-10  absolute bottom-16  mb-2  "
                            onChange={(e) =>
                              setSelectedSize((prevSelectedSize) => ({
                                ...prevSelectedSize,
                                [_id]: e.target.value,
                              }))
                            }
                            value={selectedSize[_id] || ""}
                          >
                            <option value="">Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                          </select>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const existingItem = cart.find(
                          (cartItem) => cartItem._id === item._id
                        );
                        if (selectedCategory === "Sari" && !selectedSize[_id]) {
                          alert("Please select a color before adding to cart.");
                          return;
                        }
                        if (selectedCategory !== "Sari" && !selectedSize[_id]) {
                          alert("Please select a size before adding to cart.");
                          return;
                        }
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
                          const newItem = {
                            ...item,
                            quantity: 1,
                            size:
                              selectedCategory === "Sari"
                                ? selectedSize[_id]
                                : selectedSize[_id],
                            // Use the color option for the Sari category and size option for others
                          };
                          setCart([...cart, newItem]);
                        }

                        alert("Item added to cart");
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, item])
                        );
                      }}
                      className="absolute bottom-3 ml-6"
                    >
                      <div className="flex justify-center items-center text-xl font-cursive ml-8 bg-blue-100 w-[250px] h-10 rounded-lg">
                        <BsPlus size={30} className="h-10 w-26 mr-6" />
                        Add to cart
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={8}
          previousLabel="< "
          renderOnZeroPageCount={null}
          marginPagesDisplayed={2}
          containerClassName="pagination flex justify-center items-center mt-4"
          pageClassName="page-item"
          pageLinkClassName="page-link px-4 py-1 rounded-md border border-gray-300 mr-2"
          previousClassName="page-item"
          previousLinkClassName="page-link px-3 py-1 rounded-md border border-gray-300 mr-2"
          nextClassName="page-item"
          nextLinkClassName="page-link px-2 py-1 rounded-md border border-gray-300"
          activeClassName=" text-red-500 "
        />
        <Footer />
      </div>
    </>
  );
};

export default Product;
