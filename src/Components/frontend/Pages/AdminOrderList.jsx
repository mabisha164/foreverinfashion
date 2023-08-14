import React, { useState, useEffect } from "react";
import { ImSpinner9 } from "react-icons/im";
import { TiDelete } from "react-icons/ti";
const AdminOrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/allOrders");
        const data = await response.json();
        setOrders(data.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const deleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      fetch("http://localhost:8000/api/deleteOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          orderid: orderId,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "Ok") {
            setOrders((prevOrders) =>
              prevOrders.filter((order) => order._id !== orderId)
            );
            alert("Order deleted successfully");
          } else {
            alert("Error deleting order");
          }
        })
        .catch((error) => {
          console.error("Error deleting order:", error);
          alert("Error deleting order");
        });
    }
  };

  if (loading) {
    return (
      <div className="flex  mt-[100px] ml-[200px] h-screen">
        <ImSpinner9
          className="animate-spin text-4xl text-gray-500"
          size={150}
          color="red"
        />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl flex ml-[180px] font-custom mt-28 ">
        All Orders:
      </h2>
      <ul className="p-10 ml-24 ">
        <table className="w-[900px] border border-gray-200 text-center shadow-2xl rounded-3xl">
          <thead className="bg-gradient-to-r to-rose-300 from-pink-400 h-12">
            <tr className="border border-gray-400">
              <th className="text-white p-4">Email</th>
              <th className="text-white p-4">Order Date</th>
              <th className="text-white p-4">Items</th>
              <th className="text-white p-4 ">Total Price</th>
              <th className="text-white p-4">Delete</th>
            </tr>
          </thead>
          <tbody className="p-4 ">
            {orders.map((order) => (
              <tr key={order._id} className="border border-gray-400">
                <td>{order.email}</td>
                <td>{new Date(order.order_date).toLocaleString()}</td>
                <td className="">
                  {order.order_data.map((item, index) => (
                    <div key={index} className="mt-4 ">
                      {item.name} x {item.quantity}
                    </div>
                  ))}
                </td>
                <td>
                  Rs.{" "}
                  {order.order_data.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </td>
                <td>
                  <button onClick={() => deleteOrder(order._id)}>
                    <TiDelete size={40} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default AdminOrderList;
