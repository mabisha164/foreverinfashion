import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
export default function AdminHome({ allUsers, setAllUsers }) {
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

          // Remove the deleted user from the allUsers state
          setAllUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== id)
          );
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <h2>All Users:</h2>

      <ul>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Delete</th>
          </tr>

          {allUsers.map((user) => (
            <li key={user._id}>
              <tr>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{user.userType}</td>
                <td>
                  <MdDelete
                    onClick={() => deleteUser(user._id, user.firstName)}
                  />
                </td>
              </tr>
            </li>
          ))}
        </table>
      </ul>
    </div>
  );
}
