// import React, { useEffect, useState } from "react";
// import Home from "./Home";
// import { useNavigate } from "react-router-dom";
// import AdminHome from "./AdminHome";

// export default function UserDetails() {
//   const [userData, setUserData] = useState("");
//   const [admin, setAdmin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8000/api/userData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         authToken: localStorage.getItem("authToken"),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("User Data Response:", data);

//         if (data.data.userType == "Admin") {
//           setAdmin(true);
//         }

//         if (data.status === "error" && data.data === "token expired") {
//           alert("Token expired, please log in again");
//           window.localStorage.clear();
//           navigate("/signin");
//         } else {
//           setUserData(data.data);
//         }
//       })
//       .catch((error) => {
//         console.error("User Data Error:", error);
//       });
//   }, []);

//   console.log("Admin Status:", admin);
//   const [allUsers, setAllUsers] = useState([]);

//   useEffect(() => {
//     if (admin) {
//       fetch("http://localhost:8000/api/getAllUser")
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === "ok") {
//             setAllUsers(data.data);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching all users:", error);
//         });
//     }
//   }, [admin]);

//   return (
//     <div>
//       {admin ? (
//         <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
//       ) : (
//         <Home />
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); // State to control which page to display
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/api/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authToken: localStorage.getItem("authToken"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User Data Response:", data);

        if (data.data.userType === "Admin") {
          setAdmin(true);
        }

        if (data.status === "error" && data.data === "token expired") {
          alert("Token expired, please log in again");
          window.localStorage.clear();
          navigate("/signin");
        } else {
          setUserData(data.data);
        }
      })
      .catch((error) => {
        console.error("User Data Error:", error);
      });
  }, []);

  console.log("Admin Status:", admin);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (admin) {
      fetch("http://localhost:8000/api/getAllUser")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            setAllUsers(data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching all users:", error);
        });
    }
  }, [admin]);

  return (
    <div className="bg-orange-50 h-screen w-full">
      {admin ? (
        <div className="">
          <h1 className="text-6xl font-custom flex justify-center p-6 text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-500  ">
            Welcome, Admin !
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-col w-[10%] p-16">
              <button
                onClick={() => setCurrentPage("UserList")}
                className="bg-gradient-to-r to-emerald-400 from-sky-400  text-white font-custom w-[300px] h-24 shadow-2xl rounded text-2xl mb-6"
              >
                UserList
              </button>
              <button
                onClick={() => setCurrentPage("OrderList")}
                className="bg-gradient-to-r to-emerald-400 from-sky-400  text-white font-custom w-[300px] h-24 shadow-2xl rounded text-2xl mb-6"
              >
                OrderList
              </button>
              <button
                onClick={() => setCurrentPage("ProductEdit")}
                className="bg-gradient-to-r to-emerald-400 from-sky-400  text-white font-custom w-[300px] h-24 shadow-2xl rounded text-2xl"
              >
                ProductUpdate
              </button>
            </div>
            <div className="p-16">
              {currentPage === "UserList" && (
                <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
              )}
              {currentPage === "OrderList" &&
                {
                  /* Render Order List Component */
                }}
              {currentPage === "ProductEdit" &&
                {
                  /* Render Product Edit Component */
                }}
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}
