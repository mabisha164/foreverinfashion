import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";

import { FiUser, FiUsers } from "react-icons/fi";
import { BiCloset } from "react-icons/bi";
import { BsFillBagFill, BsMinecartLoaded } from "react-icons/bs";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Added currentPage state
  const [userListClicked, setUserListClicked] = useState(false);

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
  });

  useEffect(() => {
    if (currentPage === "orders" && admin) {
      fetch("http://localhost:8000/api/getOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Orders Data:", data);

          if (Array.isArray(data)) {
            // Check if data is an array
            setOrders(data);
            setTotalOrders(data.length);
            setWelcomeVisible(false);
          }
        })
        .catch((error) => {
          console.log("Error fetching orders:", error);
        });
    }
  }, [currentPage, admin]);
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:8000/api/paginateProducts?page=${currentPage}`
  //       );
  //       const data = await response.json();
  //       setItems(data);
  //     } catch (error) {
  //       console.log("Error fetching items:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchItems();
  // }, [currentPage]);
  // if (currentPage === "productUpdate" && admin) {
  //   console.log("Fetched Orders Data:", data);
  //   if (Array.isArray(data)) {
  //     setProducts(data);
  //     setTotalProducts(data.length);
  //     setWelcomeVisible(false);
  //   }
  // }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/allOrders");
        const data = await response.json();
        setOrders(data.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchOrders();
  }, []);
  const totalOrders = orders.length;
  // const totalProducts = products.length;
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
      {welcomeVisible &&
        admin && ( // Conditionally render the welcome message
          <h1 className="top-8 absolute right-80 mr-36 text-5xl mt-8 text-orange-500 font-custom ">
            Welcome , Admin!
          </h1>
        )}
      {welcomeVisible && admin && (
        <div className="mt-4 text-black font-custom top-28 absolute right-80 mr-[620px] ">
          <div className="absolute top-20 shadow-2xl h-[150px] w-[300px] p-10 flex justify-between text-center align-middle  bg-gradient-to-r to-pink-300 from-rose-200 rounded-lg">
            {" "}
            <FiUsers size={40} />
            <p className="text-2xl">Customers: {allUsers.length}</p>
          </div>
        </div>
      )}
      {welcomeVisible && admin && (
        <div className="mt-4 text-black font-custom top-28 absolute right-80 mr-[290px]">
          <div className="absolute top-20 shadow-2xl h-[150px] w-[270px] p-10 flex justify-between align-middle text-center bg-gradient-to-r to-pink-300 from-rose-200 rounded-lg">
            <BsMinecartLoaded size={40} />
            <p className="text-2xl"> Orders: {totalOrders}</p>
          </div>
        </div>
      )}
      {/* {welcomeVisible && admin && (
        <div className="mt-4 text-black font-custom top-28 absolute right-60 mr-[80px]">
          <div className="absolute top-20 shadow-2xl h-[150px] w-[270px] p-10 flex justify-between align-middle text-center bg-gradient-to-r to-pink-300 from-rose-200 rounded-lg">
            <BiCloset size={40} />
            <p className="text-2xl"> Products: {totalProducts}</p>
          </div>
        </div>
      )} */}
      <div className="top-0 absolute bg-gradient-to-r to-pink-300 from-rose-200 h-[650px] w-[380px] rounded-xl shadow-2xl border ml-6">
        <div className="h-[150px] flex justify-center align-middle  w-[320px] shadow-2xl mb-10 mt-10 text-2xl font-custom text-white relative ml-4 rounded-2xl">
          <FiUser className="absolute left-14 top-14" size={30} />
          <button onClick={() => handleButtonClick("home")}>UserList</button>
        </div>
        <div className="h-[150px] flex justify-center w-[320px]  shadow-2xl mb-10 text-2xl font-custom text-white relative ml-4 rounded-2xl">
          <BiCloset className="absolute top-14 left-11" size={30} />
          <button onClick={() => handleButtonClick("productUpdate")}>
            ProductUpdate
          </button>
        </div>
        <div className="h-[150px] flex justify-evenly w-[320px]  shadow-2xl text-2xl font-custom text-white relative ml-4 rounded-2xl">
          <BsFillBagFill className="absolute top-14 left-14" size={25} />
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
        {currentPage === "orders" && (
          <AdminOrderList orders={orders} totalOrders={totalOrders} />
        )}
      </div>
    </div>
  );
}
