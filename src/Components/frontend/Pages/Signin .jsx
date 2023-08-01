import React, { useState } from "react";
// import image6 from "../Images/image6.png";

import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = await validate(formValues);
    setFormError(errors);
    setSubmit(true);
    const response = await fetch("http://localhost:8000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Value");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
    }
    navigate("/");
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="w-full h-100vh relative">
      <img
        src="https://www.bulamediainc.com/wp-content/uploads/2022/08/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg"
        className="w-full h-screen opacity-40"
      />
      <div className="bg-opacity-80 absolute top-0 right-80">
        <div className="flex p-8 justify-center pt-8">
          {/* <p>Fashionable and trendy clothes for you</p> */}
          <div className="bg-white-opacity-10 shadow-2xl p-4 rounded-ee-3xl rounded-se-3xl">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="text-8xl font-cursive text-rose-400 flex justify-center">
                Login Form
              </div>

              <div className="mt-2 font-bold">
                <label className="font-serif">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[70%] pb-4 mb-4 border-b border-b-rose-200 mt-4"
                />
                {formError.email && (
                  <div className="text-red-500">{formError.email}</div>
                )}
              </div>
              <div className="mt-2 font-bold">
                <label className="font-serif">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[70%] pb-4 mb-4 mt-4 border-b border-b-rose-200"
                />
                {formError.password && (
                  <div className="text-red-500">{formError.password}</div>
                )}
              </div>
              <div className="flex justify-between">
                <input type="checkbox" className="w-4 h-4 mt-1" />
                <span className="">Remember me</span>
                <div className="ml-32">Forget Password?</div>
              </div>
              <div className="pt-8">
                <button className="bg-rose-400 p-3 w-[90%] text-white rounded-2xl shadow-2xl text-2xl">
                  Log in
                </button>
                <div className="mt-8 flex justify-center ">
                  Create an account?
                  <Link to="/signup">
                    <div className=" underline font-medium text-blue-500">
                      Sign Up
                    </div>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
