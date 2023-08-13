import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminProductList from "./AdminProductList";
import AdminOrderList from "./AdminOrderList";
import AddProduct from "./AddProduct";
import { FiUser } from "react-icons/fi";
import { BiCloset, BiUserCircle } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
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
  }, [currentPage, admin]);

  useEffect(() => {
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
          setOrders(data);
        })
        .catch((error) => {
          console.log("Error fetching orders:", error);
        });
    }
  }, [currentPage, admin]);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    setWelcomeVisible(false);
  };
  if (!admin) {
    navigate("/");
    return null;
  }

  return (
    <div>
      {welcomeVisible && (
        <h1 className="text-6xl font-custom text-orange-700 flex justify-center mt-4 absolute right-80 mr-36">
          Welcome, Admin
        </h1>
      )}
      <div className=" h-[500px]  flex relative">
        <img
          src="https://img.freepik.com/premium-photo/wooden-clothes-hanger-pink-background-top-view_466363-39.jpg"
          className="w-full h-screen opacity-20 absolute top-0"
        />

        <div className="flex flex-col gap-5 justify-center align-middle rounded-md shadow-2xl ml-4  relative top-20 bg-gradient-to-r to-pink-300 from-red-200 w-[450px]">
          <div className="relative ml-10">
            <BiUserCircle
              size={40}
              color="white"
              className="absolute left-16 top-8"
            />
            <button
              className=" h-28 w-[350px] text-3xl rounded-md shadow-2xl  text-white font-custom"
              onClick={() => handleButtonClick("userList")}
            >
              UserList
            </button>
          </div>
          {/* Render the ProductUpdate button */}
          <div className="relative ml-10">
            <BiCloset
              size={40}
              color="white"
              className="absolute left-7 top-8"
            />
            <button
              className=" h-28 w-[350px] text-3xl rounded-md shadow-2xl  text-white font-custom"
              onClick={() => handleButtonClick("productUpdate")}
            >
              ProductUpdate
            </button>
          </div>
          <div className="relative ml-10">
            <BsFillBagFill
              size={40}
              color="white"
              className="absolute left-20 top-8"
            />
            <button
              className=" h-28 w-[350px] text-3xl rounded-md shadow-2xl  text-white font-custom"
              onClick={() => handleButtonClick("orders")}
            >
              Orders
            </button>
          </div>
        </div>

        {currentPage === "userList" ? (
          <div className="ml-10">
            {admin ? (
              <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
            ) : (
              <Home />
            )}
          </div>
        ) : currentPage === "productUpdate" ? (
          <AdminProductList products={products} />
        ) : currentPage === "orders" ? (
          <AdminOrderList orders={orders} />
        ) : null}
      </div>
    </div>
  );
}
