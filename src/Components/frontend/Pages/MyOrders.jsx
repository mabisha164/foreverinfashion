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

      console.log("order:", orderData);
      console.log("Total Price:", total);

      return total;
    } catch (error) {
      console.log("Error calculating total price:", error);
    }
  };

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
      setLoading(false); // Set loading to false when the fetch is complete
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  function formatOrderDate(dateString) {
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
  }

  return (
    <div className="">
      <h1 className="text-4xl font-custom text-center p-8 text-green-600 underline">
        My Orders
      </h1>
      <div className="ml-[450px]">
        <hr className="w-[60%] " />

        <div className="flex mt-6">
          <ul className="ml-[100px]">
            {orderData.map((order, index) => (
              <li key={index}>
                {/* <div>
              Order Date: {formatOrderDate(order.order_date).toString()}
            </div> */}
                <ul className="flex mt-4 ">
                  {/* <div className="text-xl">Category: {order.CategoryName}</div> */}

                  <div className=" border-2  border-white h-[150px] w-[150px] mt-4 shadow-2xl rounded-md">
                    <img
                      src={order.img}
                      alt={order.name}
                      className="h-[150px] w-[150px]   "
                    />
                  </div>
                  <div className="mt-6 gap-5 ml-6">
                    <div className="text-2xl font-custom underline text-orange-600">
                      {" "}
                      {order.name}
                    </div>
                    <div className="flex gap-6 mt-6">
                      <div className="text-xl font-custom ">
                        Price: Rs.{order.price}
                      </div>
                      <div>
                        <div className="font-custom text-xl">
                          Quantity: {order.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-[250px] mt-16 text-2xl text-orange-600 font-custom">
          Total: Rs.{totalPrice()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyOrders;
