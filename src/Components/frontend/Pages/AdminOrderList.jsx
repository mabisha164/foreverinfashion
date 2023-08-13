import React, { useState, useEffect } from "react";

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
    return <div>Loading orders...</div>;
  }

  return (
    <div>
      <h2>All Orders:</h2>
      <ul>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Order Date</th>
              <th>Items</th>
              <th>Total Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.email}</td>
                <td>{new Date(order.order_date).toLocaleString()}</td>
                <td>
                  {order.order_data.map((item, index) => (
                    <div key={index}>
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
                  <button onClick={() => deleteOrder(order._id)}>Delete</button>
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
