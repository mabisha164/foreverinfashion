import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import AdminHome from "./AdminHome";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
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

        if (data.data.userType == "Admin") {
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
    <div>
      {admin ? (
        <AdminHome allUsers={allUsers} setAllUsers={setAllUsers} />
      ) : (
        <Home />
      )}
    </div>
  );
}
