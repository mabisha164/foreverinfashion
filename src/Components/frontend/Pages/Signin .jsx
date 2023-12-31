import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formValues);
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
      localStorage.setItem("userEmail", formValues.email);
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", formValues.email);
      localStorage.setItem("name", formValues.name);
      navigate("/userDetails");
      // console.log(localStorage.getItem("authToken", "userEmail"));

      // navigate("/", { state: { email: formValues.email } });
    }
  };

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
        src="https://demo.blazethemes.com/trendy-news-pro-four/wp-content/uploads/sites/134/2022/08/reza-delkhosh-iRAOJYtPHZE-unsplash-820x545.jpg"
        className="w-full h-screen opacity-40"
      />
      <div className="bg-opacity-80 absolute top-10 right-80 mr-36">
        <div className="flex p-8 justify-center pt-8">
          {/* <p>Fashionable and trendy clothes for you</p> */}
          <div className="bg-white-opacity-10 shadow-2xl p-4 rounded-ee-3xl rounded-se-3xl">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="text-6xl font-custom text-rose-400 flex justify-center">
                Login Form
              </div>

              <div className="mt-3 ">
                <label className="font-serif">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-4 w-[70%] pb-4 mb-4 border-b-2 border-b-rose-400 mt-4"
                />
                {formError.email && (
                  <div className="text-red-500">{formError.email}</div>
                )}
              </div>
              <div className="mt-3 ">
                <label className="font-serif">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-4 w-[70%] pb-4 mb-4 mt-4 border-b-2 border-b-rose-400"
                />
                {formError.password && (
                  <div className="text-red-500">{formError.password}</div>
                )}
              </div>
              <div className="flex ">
                <input type="checkbox" className="w-4 h-4 mt-1" />
                <span className="ml-2">Remember me</span>

                <Link to="/forgot-password">
                  <div className=" underline font-medium ml-28 text-blue-500">
                    Forget Password?
                  </div>
                </Link>
              </div>
              <div className="pt-8">
                <button className="bg-rose-400 p-3 w-[70%] text-white rounded-2xl shadow-2xl text-2xl border-b-2 border-b-white">
                  Log in
                </button>
                <div className="mt-6 flex  ">
                  Create an account?
                  <Link to="/signup">
                    <div className=" underline font-medium ml-2  text-blue-500">
                      Sign Up
                    </div>
                  </Link>
                </div>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
