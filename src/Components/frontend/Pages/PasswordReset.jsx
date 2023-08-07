import React, { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/api/sendpasswordlink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.status === 201) {
      setEmail("");
      setMessage(true);
    } else {
      setMessage(false); // Set the message to false to indicate an error
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
            <form className="w-full">
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
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[70%] pb-4 mb-4 border-b border-b-rose-200 mt-4"
                />
              </div>
              <div className="pt-8">
                <button
                  className="bg-rose-400 p-3 w-[90%] text-white rounded-2xl shadow-2xl text-2xl"
                  onClick={sendLink}
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
};

export default PasswordReset;
