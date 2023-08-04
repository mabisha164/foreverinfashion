// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import { BsPlus, BsTrash } from "react-icons/bs";

// const Cart = ({ cartItems }) => {
//   const TotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//       totalPrice += item.price * item.quantity; // Multiply price by quantity
//     });
//     return totalPrice;
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <table className="table-auto ml-10 r">
//           <thead>
//             <tr>
//               <th className="px-6 py-6 ">
//                 <h1 className="text-xl ">Image</h1>
//               </th>
//               <th className="px-6 py-6 ">
//                 <h1 className="text-xl mr-10 ">Title</h1>
//               </th>
//               <th className="px-6 py-6 ">
//                 <h1 className="text-xl mr-20">Price</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Quantity</h1>
//               </th>
//               <th className="px-6 py-6 ">
//                 <h1 className="text-xl">Remove</h1>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td className="border px-4 py-2">
//                   <img src={item.img} alt={item.name} className="h-36" />
//                 </td>
//                 <td className="border px-6 py-6">{item.name}</td>
//                 <td className="border px-6 py-6">{item.price}</td>
//                 <td className="border px-6 py-6">{item.quantity}</td>
//                 <td className="border px-6 py-6">
//                   <button
//                     type="button"
//                     onClick={() => removeItem(item.id)}
//                     className="bg-red-400 px-6 py-2 rounded-lg"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {cartItems.length > 0 && (
//         <div className="ml-10 mt-4 flex justify-center items-center">
//           <h1>Total Price: {TotalPrice()}</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;

// import React from "react";

// const Cart = ({ cartItems, setCartItems }) => {
//   const TotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//       totalPrice += item.price * item.quantity;
//     });
//     return totalPrice;
//   };

//   const incrementQuantity = (itemId) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const decrementQuantity = (itemId) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === itemId && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartItems(updatedCart);
//   };

//   const removeItem = (itemId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCart);
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <table className="table-auto ml-10">
//           <thead>
//             <tr>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Image</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl mr-10">Title</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl mr-20">Price</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Quantity</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Remove</h1>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td className="border px-4 py-2">
//                   <img src={item.img} alt={item.name} className="h-36" />
//                 </td>
//                 <td className="border px-6 py-6">{item.name}</td>
//                 <td className="border px-6 py-6">${item.price}</td>
//                 <td className="border px-6 py-6">
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => decrementQuantity(item.id)}
//                       className="bg-gray-300 px-2 py-1 rounded-full mr-2"
//                     >
//                       -
//                     </button>
//                     <span>{item.quantity}</span>
//                     <button
//                       onClick={() => incrementQuantity(item.id)}
//                       className="bg-gray-300 px-2 py-1 rounded-full ml-2"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </td>
//                 <td className="border px-6 py-6">
//                   <button
//                     type="button"
//                     onClick={() => removeItem(item.id)}
//                     className="bg-red-400 px-6 py-2 rounded-lg"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {cartItems.length > 0 && (
//         <div className="ml-10 mt-4 flex justify-center items-center">
//           <h1>Total Price: ${TotalPrice()}</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
// import React from "react";

// const Cart = ({ cartItems, removeItem }) => {
//   const TotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach((item) => {
//       totalPrice += item.price * parseInt(item.quantity);
//     });
//     return totalPrice;
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center">
//         <table className="table-auto ml-10">
//           <thead>
//             <tr>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Image</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl mr-10">Title</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl mr-20">Price</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Quantity</h1>
//               </th>
//               <th className="px-6 py-6">
//                 <h1 className="text-xl">Remove</h1>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td className="border px-4 py-2">
//                   <img src={item.img} alt={item.name} className="h-36" />
//                 </td>
//                 <td className="border px-6 py-6">{item.name}</td>
//                 <td className="border px-6 py-6">{item.price}</td>
//                 <td className="border px-6 py-6">{item.quantity}</td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {cartItems.length > 0 && (
//         <div className="ml-10 mt-4 flex justify-center items-center">
//           Total Price: {TotalPrice()}
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;
import React from "react";
import { useCart } from "./CartContext";
// import Signin from "./Signin ";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useCart();
  // const [auth, setAuth] = Signin();
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        console.log("Item Price:", item.price); // Debugging log
        total = total + parseFloat(item.price);
      });
      console.log("Total:", total); // Debugging log
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  const removeItem = (itemid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.id === itemid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <h1>
        {cart?.length
          ? `You have ${cart.length}items in your cart`
          : "your cart is empty"}
      </h1>
      <div className="flex justify-evenly">
        <div>Cart</div>
        <div>
          {cart?.map((item) => (
            <tr key={item.id}>
              {" "}
              <td className="border px-4 py-2">
                <img src={item.img} alt={item.name} className="h-36" />
              </td>
              <td className="border px-6 py-6">{item.name}</td>
              <td className="border px-6 py-6">Rs.{item.price}</td>
              <td className="border px-6 py-6">
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="bg-red-400 px-6 py-2 rounded-lg"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </div>
        <div>
          <h1 className="text-2xl text-green-500">Cart Summary</h1>
          <p>Total | Checkout | Payment</p>
          <h4>Total: Rs.{totalPrice()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
