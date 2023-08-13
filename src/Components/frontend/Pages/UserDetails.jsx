import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminProductList from "./AdminProductList";
import AddProduct from "./AddProduct";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [showProductList, setShowProductList] = useState(false);
  const [products, setProducts] = useState([]);
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

  if (!admin) {
    navigate("/");
    return <Home />;
  }
  return (
    <div className="bg-orange-50 h-screen w-full ">
      {/* Render the UserList button */}
      {/* <button onClick={() => setCurrentPage("userList")}>UserList</button> */}
      <div className="flex flex-col gap-5 ">
        <button
          className="bg-gradient-to-r to-emerald-400 from-sky-300 h-20 w-56 text-2xl rounded-md shadow-2xl "
          onClick={() => setCurrentPage("userList")}
        >
          UserList
        </button>
        {/* Render the ProductUpdate button */}
        <button
          className="bg-gradient-to-r to-emerald-400 from-sky-400 h-20 w-56 text-2xl rounded-md shadow-2xl"
          onClick={() => setCurrentPage("productUpdate")}
        >
          ProductUpdate
        </button>
      </div>

      {currentPage === "userList" ? (
        <div>
          {/* Conditionally render AdminHome component */}
          {admin ? (
            <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
          ) : (
            <Home />
          )}
        </div>
      ) : currentPage === "productUpdate" ? (
        <AdminProductList products={products} />
      ) : null}
    </div>
  );
}
