import React, { useState } from "react";
// import image6 from "../Images/image6.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const [userType, setUserType] = useState("");
  const [secretkey, setSecretKey] = useState("");

  const handleSubmit = async (e) => {
    if (userType == "Admin" && secretkey != "Anita") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      const errors = await validate(formValues);
      setFormError(errors);
      setSubmit(true);
      const response = await fetch("http://localhost:8000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
          userType,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        setFormValues(initialValues);
        setUserType("");
        setSecretKey("");
        alert("Register successfully");
      } else {
        alert("Registration failed, please try again.");
      }
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
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
    <div className="w-full h-100vh relative flex items-center justify-center   ">
      <img
        src="https://demo.blazethemes.com/trendy-news-pro-four/wp-content/uploads/sites/134/2022/08/reza-delkhosh-iRAOJYtPHZE-unsplash-820x545.jpg"
        className="w-full h-screen opacity-40"
      />
      <div className="bg-opacity-80 absolute -top-4  p-16">
        <div className="bg-white-opacity-10 shadow-2xl p-3 rounded-ee-3xl rounded-se-3xl">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-6xl font-custom text-rose-400 flex justify-center  ">
              Register Form
            </div>
            <div>
              Register As:{" "}
              <input
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
              />
              Customer{" "}
              <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
              />
              Admin
            </div>

            <div className="pt-1 mt-2">
              {userType == "Admin" ? (
                <div>
                  <label className="font-sans font-bold ">Secret Key</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter secret key "
                    onChange={(e) => setSecretKey(e.target.value)}
                    className="shadow-lg rounded-2xl px-8 pt-1 w-[70%] pb-4 mb-4 border-b border-b-rose-300 mt-4"
                  />
                </div>
              ) : null}
              <div>
                <label className="font-sans text-gray-600 ">First Name :</label>
                <br />
                <input
                  type="name"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-3 w-[80%] pb-4 mb-4 border-b-2 border-b-rose-400 mt-4"
                />
                {formError.firstName && (
                  <div className="text-red-500">{formError.firstName}</div>
                )}
              </div>
              <label className="font-sans  text-gray-600 ">Last Name :</label>
              <br />
              <input
                type="name"
                placeholder="Enter your last name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                className="shadow-lg rounded-2xl px-10 pt-3 w-[80%] pb-4 mb-4 border-b-2 border-b-rose-400 mt-4"
              />
              {formError.lastName && (
                <div className="text-red-500">{formError.lastName}</div>
              )}
            </div>
            <div className="mt-2">
              <label className=" text-gray-600">Email :</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="shadow-lg rounded-2xl px-8 pt-3 w-[80%] pb-4 mb-4 border-b-2 border-b-rose-400 mt-4"
              />
              {formError.email && (
                <div className="text-red-500">{formError.email}</div>
              )}
            </div>
            <div className="mt-2">
              <label className="text-gray-600">Password :</label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className="shadow-lg rounded-2xl px-8 pt-3 w-[80%] pb-4 mb-4 mt-4 border-b-2 border-b-rose-400 text-gray-600"
              />
              {formError.password && (
                <div className="text-red-500 ">{formError.password}</div>
              )}
            </div>

            <div className="">
              <input type="checkbox" className="w-4 h-4 mt-1" />
              <span className="ml-2 text-gray-600">Remember me</span>
              {/* <div className="ml-20">Forget Password?</div> */}
            </div>
            <div className="pt-5">
              <button className="bg-rose-400 p-3 w-[80%] text-white rounded-2xl shadow-2xl text-2xl border-b-2 border-b-white">
                Register
              </button>
              <div className="mt-6 flex justify-center ">
                Already have an account?
                <Link to="/signin">
                  <div className=" underline font-medium text-blue-500 ml-1">
                    Log In
                  </div>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    //{" "}
    // </div>
  );
};

export default SignUp;
