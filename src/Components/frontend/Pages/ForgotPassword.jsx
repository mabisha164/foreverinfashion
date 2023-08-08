import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ForgotPassword = () => {
  const { id, token } = useParams();

  const history = useNavigate();

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(
      `http://localhost:5173/api/forgotpassword/${id}/${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data.status == 201) {
      console.log("User Valid");
    } else {
      history("*");
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();
    const res = await fetch(`/${id}/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    if (data.status == 201) {
      setPassword("");
      setMessage(true);
    } else {
      alert("Token Expired generate new link");
    }
  };
  useEffect(() => {
    userValid();
  }, []);
  return (
    <>
      <div className="w-full h-100vh relative">
        <img
          src="https://demo.blazethemes.com/trendy-news-pro-four/wp-content/uploads/sites/134/2022/08/reza-delkhosh-iRAOJYtPHZE-unsplash-820x545.jpg"
          className="w-full h-screen opacity-40"
          alt="Background"
        />
        <div className="bg-opacity-80 absolute top-0 right-80">
          <div className="flex p-8 justify-center pt-8">
            <div className="bg-white-opacity-10 shadow-2xl p-4 rounded-ee-3xl rounded-se-3xl">
              <form className="w-full">
                <div className="text-8xl font-cursive text-rose-400 flex justify-center">
                  Enter Your Password
                </div>

                <div className="mt-3">
                  <label className="font-serif">New Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Enter your new password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="shadow-lg rounded-2xl px-8 pt-2 w-[70%] pb-4 mb-4 border-b border-b-rose-200 mt-4"
                  />
                </div>
                <div className="pt-8">
                  <button
                    className="bg-rose-400 p-3 w-[90%] text-white rounded-2xl shadow-2xl text-2xl"
                    onClick={sendpassword}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
