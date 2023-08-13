import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";

const AdminHome = ({ allUsers, setAllUsers }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/womenfashion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data[0]);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:8000/api/deleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          setAllUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
      //
    }
  };

  const editUser = (id) => {
    setEditingUserId(id);
    const userToEdit = allUsers.find((user) => user._id === id);
    setEditedUser(userToEdit);
  };

  const saveEdit = () => {
    fetch("http://localhost:8000/api/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        userid: editingUserId,
        updatedFields: editedUser,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Ok") {
          alert("User details updated successfully");
          setAllUsers((prevUsers) =>
            prevUsers.map((user) =>
              user._id === editingUserId ? editedUser : user
            )
          );
          setEditingUserId(null);
          setEditedUser({});
        } else {
          alert("Error updating user details");
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Error updating user details");
      });
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setEditedUser({});
  };

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
    <div>
      <h2 className="text-2xl font-custom mt-16 ml-[200px]">All Users:</h2>

      <div className="overflow-x-auto shadow-2xl w-[60%]rounded-md ml-[100px] mt-6">
        <table className="table-auto  border border-gray-200 ">
          <thead>
            <tr className="bg-gradient-to-r to-rose-300 from-pink-400 shadow-2xl rounded-md ">
              <th className="p-2 font-custom text-2xl text-white">Name</th>
              <th className="p-2  font-custom text-2xl text-white">Email</th>
              <th className="p-2  font-custom text-2xl text-white">
                User Type
              </th>
              <th className="p-4  font-custom text-2xl text-white">Edit</th>
              <th className="p-4  font-custom text-2xl text-white">Delete</th>
            </tr>
          </thead>
          <tbody className="">
            {allUsers.map((user) => (
              <tr
                key={user._id}
                className={editingUserId === user._id ? "bg-gray-200" : ""}
              >
                <td className="p-4">
                  {editingUserId === user._id ? (
                    <input
                      type="text"
                      value={editedUser.firstName || ""}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full p-1 border rounded ml-2"
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                <td className="p-4">
                  {editingUserId === user._id ? (
                    <input
                      type="text"
                      value={editedUser.email || ""}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          email: e.target.value,
                        })
                      }
                      className="w-full p-1 border rounded "
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="p-4">
                  {editingUserId === user._id ? (
                    <input
                      type="text"
                      value={editedUser.userType || ""}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          userType: e.target.value,
                        })
                      }
                      className="w-full p-1 border rounded "
                    />
                  ) : (
                    user.userType
                  )}
                </td>
                <td className="p-4 ml-2 flex gap-4">
                  {editingUserId === user._id ? (
                    <>
                      <button
                        onClick={saveEdit}
                        className="mr-1 px-2 py-1 bg-blue-500 text-white rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <MdEdit
                      size={25}
                      onClick={() => editUser(user._id)}
                      className="cursor-pointer text-orange-500"
                    />
                  )}
                </td>
                <td className="p-4">
                  <MdDelete
                    size={25}
                    onClick={() => deleteUser(user._id, user.firstName)}
                    className="cursor-pointer text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <h2>All Products:</h2>

      <AdminProductList products={products} /> */}
      {/* <AdminOrderList orders={orders} /> */}
    </div>
  );
};

export default AdminHome;
