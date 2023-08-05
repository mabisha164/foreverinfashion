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
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
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
    <div className="flex justify-center items-center">
      <h1>
        {cart?.length
          ? `You have ${cart.length} items in your cart`
          : "Your cart is empty"}
      </h1>
      <div className="flex justify-evenly">
        <div>Cart</div>
        <div>
          {cart?.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">
                <img src={item.img} alt={item.name} className="h-36" />
              </td>
              <td className="border px-6 py-6">{item.name}</td>
              <td className="border px-6 py-6">
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="border px-6 py-6">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(item.id, (quantities[item.id] || 0) + 1)
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

        <div>
          <h1>Cart Summary</h1>
          <p>Total | Checkout | Payment</p>
          <h4>Total: {totalPrice()}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
