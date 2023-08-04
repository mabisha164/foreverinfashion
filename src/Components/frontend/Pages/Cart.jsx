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
