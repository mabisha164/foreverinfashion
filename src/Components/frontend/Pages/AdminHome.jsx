import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { ImSpinner9 } from "react-icons/im";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";

const AdminHome = ({ allUsers, setAllUsers }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <h1>Welcome, Admin!</h1>

      <h2>All Users:</h2>

      <ul>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>UserType</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user._id}>
                <td>
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
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                <td>
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
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
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
                    />
                  ) : (
                    user.userType
                  )}
                </td>
                <td>
                  {editingUserId === user._id ? (
                    <>
                      <button onClick={saveEdit}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <MdEdit onClick={() => editUser(user._id)} />
                  )}
                </td>
                <td>
                  <MdDelete
                    onClick={() => deleteUser(user._id, user.firstName)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
      <h2>All Products:</h2>

      <AdminProductList products={products} />
      <h2>All Orders:</h2>
      <AdminOrderList />
    </div>
  );
};

export default AdminHome;
