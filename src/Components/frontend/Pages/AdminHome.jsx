// import React, { useState } from "react";
// import { MdDelete, MdEdit } from "react-icons/md";

// export default function AdminHome({ allUsers, setAllUsers }) {
// const [editingUserId, setEditingUserId] = useState(null);
// const [editedUser, setEditedUser] = useState({});

// const deleteUser = (id, name) => {
//   if (window.confirm(`Are you sure you want to delete ${name}`)) {
//     fetch("http://localhost:8000/api/deleteUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         userid: id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert(data.data);
//         setAllUsers((prevUsers) =>
//           prevUsers.filter((user) => user._id !== id)
//         );
//       })
//       .catch((error) => {
//         console.error("Error deleting user:", error);
//       });
//     //
//   }
// };

// const editUser = (id) => {
//   setEditingUserId(id);
//   const userToEdit = allUsers.find((user) => user._id === id);
//   setEditedUser(userToEdit);
// };

// const saveEdit = () => {
//   fetch("http://localhost:8000/api/updateUser", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       userid: editingUserId,
//       updatedFields: editedUser,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.status === "Ok") {
//         alert("User details updated successfully");
//         setAllUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === editingUserId ? editedUser : user
//           )
//         );
//         setEditingUserId(null);
//         setEditedUser({});
//       } else {
//         alert("Error updating user details");
//       }
//     })
//     .catch((error) => {
//       console.error("Error updating user:", error);
//       alert("Error updating user details");
//     });
// };

// const cancelEdit = () => {
//   setEditingUserId(null);
//   setEditedUser({});
// };

//   return (
//     <div className=" p-10  ">
//       <h2 className="text-4xl font-custom mb-6 flex justify-center ">
//         All Users:
//       </h2>

//       <ul>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>User Type</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allUsers.map((user) => (
//               <tr key={user._id}>
//                 <td>
//                   {editingUserId === user._id ? (
//                     <input
//                       type="text"
//                       value={editedUser.firstName || ""}
//                       onChange={(e) =>
//                         setEditedUser({
//                           ...editedUser,
//                           firstName: e.target.value,
//                         })
//                       }
//                     />
//                   ) : (
//                     user.firstName
//                   )}
//                 </td>
//                 <td>
//                   {editingUserId === user._id ? (
//                     <input
//                       type="text"
//                       value={editedUser.email || ""}
//                       onChange={(e) =>
//                         setEditedUser({
//                           ...editedUser,
//                           email: e.target.value,
//                         })
//                       }
//                     />
//                   ) : (
//                     user.email
//                   )}
//                 </td>
//                 <td>
//                   {editingUserId === user._id ? (
//                     <input
//                       type="text"
//                       value={editedUser.userType || ""}
//                       onChange={(e) =>
//                         setEditedUser({
//                           ...editedUser,
//                           userType: e.target.value,
//                         })
//                       }
//                     />
//                   ) : (
//                     user.userType
//                   )}
//                 </td>
//                 <td>
//                   {editingUserId === user._id ? (
//                     <>
//                       <button onClick={saveEdit}>Save</button>
//                       <button onClick={cancelEdit}>Cancel</button>
//                     </>
//                   ) : (
//                     <MdEdit onClick={() => editUser(user._id)} />
//                   )}
//                 </td>
//                 <td>
//                   <MdDelete
//                     onClick={() => deleteUser(user._id, user.firstName)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </ul>
//     </div>
//   );
// }

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

  return (
    <div className=" ">
      <h2 className="text-4xl font-cursive mb-6 flex justify-center ml-6">
        All Users:
      </h2>

      <div className="overflow-x-auto border border-white rounded-md shadow-2xl ml-[350px]">
        <table className="table-auto w-full">
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
                className={editingUserId === user._id ? "bg-gray-100" : ""}
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
    </div>
  );
}
