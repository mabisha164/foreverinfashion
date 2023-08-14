import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";

import { FiUser } from "react-icons/fi";
import { BiCloset, BiUserCircle } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Added currentPage state
  const [userListClicked, setUserListClicked] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [welcomeVisible, setWelcomeVisible] = useState(true);

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

  useEffect(() => {
    if (currentPage === "productUpdate" && admin) {
      // Fetch products data when the "ProductUpdate" button is clicked
      fetch("http://localhost:8000/api/womenfashion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data[0]);
        })
        .catch((error) => {
          console.log("Error fetching products:", error);
        });
    }

    if (currentPage === "orders" && admin) {
      // Fetch orders data when the "Orders" button is clicked
      fetch("http://localhost:8000/api/getOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Orders Data:", data);

          if (data.status === "ok") {
            setOrders(data);
          }
        })
        .catch((error) => {
          console.log("Error fetching orders:", error);
        });
    }
  }, [currentPage, admin]);

  // useEffect(() => {
  //   if (currentPage === "orders" && admin) {
  //     fetch("http://localhost:8000/api/getOrders", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status === "ok") {
  //           setOrders(data.data); // Make sure the data path is correct
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching orders:", error);
  //       });
  //   }
  //  }, [currentPage, admin]);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    if (page === "home") {
      setUserListClicked(true);
      setWelcomeVisible(false);
    }
  };
  if (!admin) {
    navigate("/");
    return null;
  }

  return (
    <div className="relative flex ">
      <img
        src="https://img.freepik.com/premium-photo/black-friday-clothing-industry-concept-pink-background-flat-lay-with-single-one-isolated-wooden-clothes-hanger_371428-1625.jpg"
        className="w-full h-screen opacity-20"
      />{" "}
      {welcomeVisible && ( // Conditionally render the welcome message
        <h1 className="top-0 absolute right-80 mr-36 text-5xl mt-8 text-orange-500 font-custom ">
          Welcome , Admin!
        </h1>
      )}
      {welcomeVisible && admin && (
        <div className="mt-4 text-black font-custom top-16 absolute right-80 mr-36">
          <p>Total Users: {allUsers.length}</p>
          <p>Total Orders: {orders.length}</p>
        </div>
      )}
      <div className="top-10 absolute bg-gradient-to-r to-pink-300 from-rose-200 h-[400px] w-[350px] rounded-xl shadow-2xl border ml-6">
        <div className="h-20 flex justify-center align-middle  w-[320px] shadow-2xl mb-10 mt-10 text-2xl font-custom text-white relative ml-4">
          <FiUser className="absolute left-14 top-6" size={30} />
          <button onClick={() => handleButtonClick("home")}>UserList</button>
        </div>
        <div className="h-20 flex justify-center w-[320px]  shadow-2xl mb-10 text-2xl font-custom text-white relative ml-4">
          <BiCloset className="absolute top-6 left-11" size={30} />
          <button onClick={() => handleButtonClick("productUpdate")}>
            ProductUpdate
          </button>
        </div>
        <div className="h-20 flex justify-evenly w-[320px]  shadow-2xl text-2xl font-custom text-white relative ml-4">
          <BsFillBagFill className="absolute top-6 left-14" size={25} />
          <button className="" onClick={() => handleButtonClick("orders")}>
            Orders
          </button>
        </div>
      </div>
      <div className="absolute left-36 ml-36">
        {userListClicked && currentPage === "home" && (
          <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
        )}
        {currentPage === "productUpdate" && (
          <AdminProductList products={products} />
        )}
        {currentPage === "orders" && <AdminOrderList orders={orders} />}
      </div>
    </div>
  );
}

// const fetchMenuData = async () => {
//   try {
//     const menuResponse = await fetch("http://localhost:7000/api/foodMenu");
//     const menuData = await menuResponse.json();

//     // Debug: Log categoriesData and its properties to the console
//     console.log("Menu Data:", menuData);

//     if (menuData && Array.isArray(menuData)) {
//       const menuCount = menuData.length;
//       setTotalMenu(menuCount);
//     } else {
//       console.error("Menu data is undefined or has an unexpected format.");
//     }
//   } catch (error) {
//     console.error("Error fetching Menu data:", error);
//   }
// };
