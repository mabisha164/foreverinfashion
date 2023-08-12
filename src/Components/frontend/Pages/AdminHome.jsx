// import React, { useEffect, useState } from "react";
// import { MdDelete } from "react-icons/md";

// export default function AdminHome({ allUsers, setAllUsers }) {
//   const deleteUser = (id, name) => {
//     if (window.confirm(`Are you sure you want to delete ${name}`)) {
//       fetch("http://localhost:8000/api/deleteUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           userid: id,
//         }),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           alert(data.data);

//           // Remove the deleted user from the allUsers state
//           setAllUsers((prevUsers) =>
//             prevUsers.filter((user) => user._id !== id)
//           );
//         })
//         .catch((error) => {
//           console.error("Error deleting user:", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome, Admin!</h1>
//       <h2>All Users:</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>User Type</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allUsers.map((user) => (
//             <tr key={user._id}>
//               <td>{user.firstName}</td>
//               <td>{user.email}</td>
//               <td>{user.userType}</td>
//               <td>
//                 <MdDelete
//                   onClick={() => deleteUser(user._id, user.firstName)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
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

  return (
    <div className=" p-10  ">
      <h2 className="text-4xl font-custom mb-6 flex justify-center ">
        All Users:
      </h2>

      {/* <div className=""> */}
      <table className="w-[100%] border border-gray-400 text-center ml-[250px] shadow-2xl rounded-md">
        <thead className="font-cursive bg-gray-200">
          <tr>
            <th className="p-3">
              <h1 className="text-2xl">Name</h1>
            </th>
            <th className="p-2">
              <h1 className="text-2xl">Email</h1>
            </th>

            <th className="p-3">
              <h1 className="text-2xl">User Type</h1>
            </th>
            <th className="p-3">
              <h1 className="text-2xl">Delete</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user._id} className="bg-white hover:bg-gray-50">
              <td className="p-4">{user.firstName}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.userType}</td>
              <td className="p-4 text-center">
                <MdDelete
                  className="cursor-pointer text-red-500 hover:text-red-700"
                  onClick={() => deleteUser(user._id, user.firstName)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
