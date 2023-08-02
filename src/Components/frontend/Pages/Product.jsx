// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import { BsPlus } from "react-icons/bs";
// import { ImSpinner9 } from "react-icons/im";

// const Product = ({ addToCart }) => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

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
//         console.log(data[0]);
//         // setItems(data);
//       } catch (error) {
//         console.log("Error fetching items:", error);
//       } finally {
//         setLoading(false); // Set loading to false regardless of success or error
//       }
//     };
//     fetchItems();
//   }, []);

//   if (loading) {
//     // Return the loading spinner while waiting for data
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

//   return (
//     <div>
//       <h1>
//         <b className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-fantasy animate-pulse">
//           Women's Clothing Store
//         </b>
//       </h1>
//       <br />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
//         {items.map((item) => {
//           const { _id, img, name, CategoryName, description, price } = item;
//           return (
//             // <Link to={`/item/${id}`} key={item._id}>
//             <div>
//               <br />
//               <div className="border border-[white] h-[200px] w-[320px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
//                 <div className="w-full h-full flex justify-center items-center">
//                   <div className="bg-white height-[300]" key={item._id}>
//                     <br />
//                     <br />
//                     <img
//                       className="h-[180px] w-[200px] flex justify-center items-center mb-20 ml-10 group-hover:scale-110"
//                       src={img}
//                     />
//                     <h2>{CategoryName}</h2>
//                     <h2 className="h-14 ml-10">{name}</h2>
//                     <h3 className="flex justify-center items-center">
//                       price:${price}
//                     </h3>
//                     <br />
//                     <p>{description}</p>
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         addToCart(item);
//                         alert("Item added to cart!!!");
//                       }}
//                     >
//                       <div className="relative top-0 flex justify-center items-center text- bg-blue-100 w-[310px] h-10 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
//                         <BsPlus size={15} className="h-10 w-20 " />
//                         Add to cart
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <br />
//             </div>
//             // </Link>
//           );
//         })}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";

const Product = ({ addToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(data[0]);
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
      <div className="flex justify-center items-center h-screen">
        <ImSpinner9
          className="animate-spin text-4xl text-gray-500"
          size={100}
          color="red"
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>
          <b className="flex justify-center items-center text-5xl mt-6 italic font-serif text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-fantasy animate-pulse">
            Women's Clothing Store
          </b>
        </h1>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ml-10 bg-white">
          {items.map((item) => {
            const { _id, img, name, CategoryName, description, price } = item;
            return (
              // <Link to={`/item/${id}`} key={item._id}>
              <div>
                <br />
                <div className="border border-[white] h-[200px] w-[320px] mr-10 mb-4 relative overflow-hidden group transition shadow-2xl rounded-lg">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="bg-white height-[300]" key={item._id}>
                      <br />
                      <br />
                      <img
                        className="h-[180px] w-[200px] flex justify-center items-center mb-20 ml-10 group-hover:scale-110"
                        src={img}
                      />
                      <h2>{CategoryName}</h2>
                      <h2 className="h-14 ml-10">{name}</h2>
                      <h3 className="flex justify-center items-center">
                        price:${price}
                      </h3>
                      <br />
                      <p>{description}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(item);
                          alert("Item added to cart!!!");
                        }}
                      >
                        <div className="relative top-0 flex justify-center items-center text- bg-blue-100 w-[310px] h-10 rounded-lg opacity-0 group-hover:opacity-100 transition-all">
                          <BsPlus size={15} className="h-10 w-20 " />
                          Add to cart
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <br />
              </div>
              // </Link>
            );
          })}
        </div>
        <Footer />
      </div>
      {/* ); */}
    </>
  );
};

// <div className="container mx-auto p-8">
//   <h1 className="text-5xl font-bold mb-4 text-center text-emerald-600">
//     Women's Clothing Store
//   </h1>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//     {items.map((item) => {
//       // const { _id, img, name, CategoryName, description, price } = item;
//       return (
//         <div key={item._id}>
//           <img src={item.img} className="w-[200px] h-[300px]" />
//           <div className="text-red-400">{item.name}</div>
//         </div>
//         // <div key={index} className="bg-white rounded-lg shadow-md p-4">
//   <img
//     src={item.img}
//     alt={item.name}
//     className="h-40 w-full object-cover mb-4 rounded-md"
//   />

//   <h2 className="text-lg font-semibold mb-2">
//     {item.CategoryName}
//   </h2>
//   <h3 className="text-base font-medium mb-2">{item.name}</h3>
//   <p className="text-gray-600 text-sm mb-2">{item.description}</p>
//   <div className="flex justify-between items-center">
//     {/* <span className="text-lg font-bold text-emerald-600">
//       ${item.price}
//     </span> */}
//     <button
//       onClick={() => {
//         addToCart(item);
//         alert("Item added to cart!!!");
//       }}
//       className="bg-emerald-600 text-white py-1 px-4 rounded-lg hover:bg-emerald-700 transition duration-300"
//     >
//       <BsPlus size={18} className="mr-1" />
//       Add to Cart
//     </button>
//   </div>
// </div>
//       );
//     })}
//   </div>
// </div>
//   );
// };

export default Product;

{
  /* <div className="flex flex-wrap">
  {items.map((value) => {
    return (
      // <Link to={/detail/${value._id}}>
      <div className=" text-red-500 text-3xl font-bold bg-white ml-10 mt-20 relative rounded-2xl shadow-2xl hover:scale-110 hover:duration-300">
        <div>
          <img
            src={value.img}
            alt={value.name}
            className="w-[550px] relative h-[350px] shadow-2xl rounded-2xl"
          />
        </div>
        <div className="text-center mt-8 bg-red-400 text-white p-2 w-[250px] absolute top-0 right-0">
          {value.name}
        </div>
      </div>
      // </Link>
    );
  })}
</div>; */
}
