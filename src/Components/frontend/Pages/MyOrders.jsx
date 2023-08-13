import React, { useState, useEffect } from "react";
import Footer from "./Footer";
// import { useCart } from "./CartContext";

function MyOrders() {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cart, setCart] = useCart();

  const totalPrice = () => {
    try {
      let total = 0;
      orderData?.forEach((order) => {
        total += parseInt(order.price) * (order.quantity || 1);
      });

      return total;
    } catch (error) {
      console.log("Error calculating total price:", error);
    }
  };

  const formatOrderDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      const data = await response.json();
      if (data.success) {
        setOrderData(data.order_data);
      } else {
        console.log("Error fetching orders:", data.error);
      }
    } catch (error) {
      console.log("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-custom text-center text-green-600 underline mb-8">
        My Orders
      </h1>
      <div className="flex gap-8">
        <div className="w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ... Render order items ... */}
            {orderData.map((order, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white"
              >
                {/* ... Order item content ... */}
                <img
                  src={order.img}
                  alt={order.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-orange-600 mb-2">
                    {order.name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="text-xl text-gray-700">
                      Price: Rs.{order.price}
                    </div>
                    <div className="text-xl text-gray-700">
                      Quantity: {order.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-2xl font-custom text-orange-600 mb-4">
            Payment Summary
          </h2>

          {/* ... Payment summary table ... */}
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Description</th>
                <th className="py-2 px-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">{order.name}</td>
                  <td className="py-2 px-4 text-right">
                    Rs.{parseInt(order.price) * (order.quantity || 1)}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Subtotal</td>
                <td className="py-2 px-4 text-right font-semibold">
                  Rs.{totalPrice()}
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4">Delivery Charge</td>
                <td className="py-2 px-4 text-right">Rs.100</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-2 px-4 font-semibold">Total Amount</td>
                <td className="py-2 px-4 text-right font-semibold">
                  Rs.{totalPrice() + 100}
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-custom text-orange-600 my-4">
            Payment Options
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Credit Card
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">eSewa</label>
          </div>
          <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-md">
            Pay Now
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default MyOrders;
