import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export default function AdminHome({ allUsers, setAllUsers }) {
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
              <th>User Type</th>
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
    </div>
  );
}
