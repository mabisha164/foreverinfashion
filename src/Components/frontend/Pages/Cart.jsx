// import React from "react";
// import { useCart } from "./CartContext";

// import { useNavigate } from "react-router-dom";
// const Cart = () => {
//   const [cart, setCart] = useCart();

//   const navigate = useNavigate();

//   const totalPrice = () => {
//     try {
//       let total = 0;
//       cart?.map((item) => {
//         console.log("Item Price:", item.price);
//         total = total + parseFloat(item.price);
//       });
//       console.log("Total:", total);
//       return total;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const removeItem = (itemid) => {
//     try {
//       let myCart = [...cart];
//       let index = myCart.findIndex((item) => item.id === itemid);
//       myCart.splice(index, 1);
//       setCart(myCart);
//       localStorage.setItem("cart", JSON.stringify(myCart));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="">
//       <h1>
//         {cart?.length
//           ? `You have ${cart.length}items in your cart`
//           : "your cart is empty"}
//       </h1>
//       <div className="flex justify-evenly">
//         <div>Cart</div>
//         <div>
//           {cart?.map((item) => (
//             <tr key={item.id}>
//               {" "}
//               <td className="border px-4 py-2">
//                 <img src={item.img} alt={item.name} className="h-36" />
//               </td>
//               <td className="border px-6 py-6">{item.name}</td>
//               <td className="border px-6 py-6">Rs.{item.price}</td>
//               <td className="border px-6 py-6">
//                 <button
//                   type="button"
//                   onClick={() => removeItem(item.id)}
//                   className="bg-red-400 px-6 py-2 rounded-lg"
//                 >
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </div>
//         <div>
//           <h1 className="text-2xl text-green-500">Cart Summary</h1>
//           <p>Total | Checkout | Payment</p>
//           <h4>Total: Rs.{totalPrice()}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total = total + item.price * (quantities[item.id] || 1);
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const removeItem = (itemId) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.id === itemId);
      myCart.splice(index, 1);
      setCart(myCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Item removed");
    } catch (error) {
      console.log(error);
    }
  };

  // const addToCart = (item) => {
  //   const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  //   if (existingItem) {
  //     existingItem.quantity += 1;
  //     setCart([...cart]);
  //     alert(`Item added ${existingItem.quantity}x`);
  //   } else {
  //     setCart([...cart, { ...item, quantity: 1 }]);
  //     alert("Item added to the cart.");
  //   }
  // };

  return (
    <div className="">
      <h1 className="text-xl flex justify-center items-center mt-10">
        {cart?.length
          ? `You have ${cart.length} items in your cart`
          : "Your cart is empty"}
      </h1>
      <div className=" ">
        {/* <div className="text-4xl text-orange-600">Cart</div> */}
        <div className="flex justify-center items-center">
          <table className="table-auto  r">
            <thead>
              <tr>
                <th className="px-6 py-6 ">
                  <h1 className="text-xl ">Image</h1>
                </th>
                <th className="px-6 py-6 ">
                  <h1 className="text-xl mr-10 ">Title</h1>
                </th>
                <th className="px-6 py-6 ">
                  <h1 className="text-xl mr-20">Price</h1>
                </th>
                <th className="px-6 py-6 ">
                  <h1 className="text-xl mr-20">Quantity</h1>
                </th>
                <th className="px-6 py-6 ">
                  <h1 className="text-xl">Remove</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <div>
                {cart?.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-6 py-6">
                      <img src={item.img} alt={item.name} className="h-36" />
                    </td>
                    <td className="border px-6 py-6">{item.name}</td>
                    <td className="border px-6 py-6">Rs.{item.price}</td>
                    <td className="border px-6 py-6">{item.quantity}</td>
                    <td className="border px-6 py-6">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            (quantities[item.id] || 0) + 1
                          )
                        }
                        className="bg-green-400 px-2 py-1 rounded-lg"
                      >
                        +
                      </button>
                      {quantities[item.id] || 1}
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max((quantities[item.id] || 0) - 1, 0)
                          )
                        }
                        className="bg-red-400 px-2 py-1 rounded-lg"
                      >
                        -
                      </button>
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
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="flex justify-center align-middle mt-10 text-3xl text-green-600 underline">
            Cart Summary
          </h1>
          <div className="mt-4">
            <p className="flex justify-center align-middle text-2xl">
              Total | Checkout | Payment
            </p>
            <h4 className="flex justify-center align-middle mt-6 text-xl">
              Total: {totalPrice()}
            </h4>
          </div>
          <div className="flex justify-center align-middle mt-6 text-xl hover:text-white">
            <button className="bg-red-500 h-10 w-28 rounded-xl shadow-2xl cursor-pointer ">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
