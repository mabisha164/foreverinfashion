import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (data.Status === "Success") {
        // navigate("/signin");
        setMessage(true);
      } else {
        setMessage(false); // Set the message to false to indicate an error
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full h-100vh relative">
      <img
        src="https://demo.blazethemes.com/trendy-news-pro-four/wp-content/uploads/sites/134/2022/08/reza-delkhosh-iRAOJYtPHZE-unsplash-820x545.jpg"
        className="w-full h-screen opacity-40"
        alt="Background"
      />
      <div className="bg-opacity-80 absolute top-0 right-80">
        <div className="flex p-8 justify-center pt-8">
          <div className="bg-white-opacity-10 shadow-2xl p-4 rounded-ee-3xl rounded-se-3xl">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="text-8xl font-cursive text-rose-400 flex justify-center">
                Enter Your Email
              </div>
              {message ? (
                <p className="text-2xl text-green-400">
                  Password reset link sent successfully to your Email
                </p>
              ) : (
                ""
              )}
              <div className="mt-3">
                <label className="font-serif">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pt-8">
                <button
                  className="bg-rose-400 p-3 w-[90%] text-white rounded-2xl shadow-2xl text-2xl"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
