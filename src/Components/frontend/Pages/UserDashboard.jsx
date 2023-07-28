import React, { useState } from "react";
import { Link } from "react-router-dom";

const Authentication = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission here, e.g., API call to log in user
    console.log("Login Form Data: ", loginForm);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission here, e.g., API call to register user
    console.log("Signup Form Data: ", signupForm);
  };

  return (
    <div className="bg-rose-100">
      <div className="flex p-10 justify-center pt-10">
        <div className="bg-white p-16 rounded-ee-3xl rounded-se-3xl">
          <div className="text-8xl font-cursive text-rose-400 flex justify-center">
            Authentication
          </div>
          <div className="flex justify-around mt-8">
            {/* Login Form */}
            <form onSubmit={handleLoginSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                placeholder="Enter your email"
                className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200 mt-4"
              />
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="Enter your password"
                className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200"
              />
              <button
                type="submit"
                className="bg-rose-200 p-4 w-full text-white rounded-2xl shadow-2xl text-2xl"
              >
                Log in
              </button>
            </form>

            {/* Signup Form */}
            <form onSubmit={handleSignupSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Signup</h2>
              <input
                type="text"
                name="fullName"
                value={signupForm.fullName}
                onChange={handleSignupChange}
                placeholder="Enter your full name"
                className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200 mt-4"
              />
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                placeholder="Enter your email"
                className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200"
              />
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                placeholder="Enter your password"
                className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200"
              />
              <button
                type="submit"
                className="bg-rose-200 p-4 w-full text-white rounded-2xl shadow-2xl text-2xl"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="mt-8 flex justify-center ">
            Already have an account?{" "}
            <Link to="/login" className="underline font-medium text-blue-500">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
