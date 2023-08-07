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
import { useCart, CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Cart = () => {
  const [cart, setCart] = useCart();
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();
  // const { increaseAmount } = useContext(CartContext);

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
  // const increaseAmount = (id) => {
  //   setCart((prevCart) => {
  //     const updatedCart = prevCart.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, quantity: (item.quantity || 1) + 1 };
  //       }
  //       return item;
  //     });
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //     return updatedCart;
  //   });
  // };

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

  return (
    <div className="">
      <h1 className="text-2xl flex justify-center items-center mt-10 bg-rose-200 font-custom w-[420px] ml-[500px] h-14 rounded-md shadow-2xl  ">
        {cart?.length
          ? `You have ${cart.length} items in your cart `
          : "Your cart is empty"}
      </h1>
      <div className=" ">
        {/* <div className="text-4xl text-orange-600">Cart</div> */}
        <div className="flex justify-center items-center mt-6">
          <table className="w-[50%]">
            <thead className="font-cursive">
              <tr>
                <th className="p-4">
                  <h1 className="text-2xl">Image</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Title</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Price</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Quantity</h1>
                </th>
                <th className="p-4">
                  <h1 className="text-2xl">Remove</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item) => (
                <tr key={item.id}>
                  <td className="border p-4">
                    <img src={item.img} alt={item.name} className="h-36" />
                  </td>
                  <td className="border p-4">{item.name}</td>
                  <td className="border p-4">Rs.{item.price}</td>
                  <td className="border p-4">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max((quantities[item.id] || 0) + 1, 0)
                          )
                        }
                        className="bg-green-400 px-2 py-1 rounded-lg"
                      >
                        +
                      </button>
                      {/* <div>
                        {" "}
                        <button onClick={() => increaseAmount(id)}>+</button>
                      </div> */}

                      <span className="mx-2">{quantities[item.id] || 1}</span>
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
                    </div>
                  </td>
                  <td className="border p-4">
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="bg-red-400 px-4 py-2 rounded-lg"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
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
              Total: Rs. {totalPrice()}
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
