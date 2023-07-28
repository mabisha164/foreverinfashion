import React, { useState } from "react";
// import image6 from "../Images/image6.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const initialValues = { fullName: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validate(formValues);
    setFormError(errors);
    setSubmit(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.password) {
      errors.cpassword = "Password don't match";
    }
    return errors;
  };

  return (
    <div className="bg-rose-100">
      <div className="flex p-10 justify-center pt-10">
        <div className="bg-white p-16 rounded-ee-3xl rounded-se-3xl">
          <form className="w-full" onSubmit={handleSubmit}>
            {Object.keys(formError).length === 0 && submit && (
              <div className="ui message success">Signed in successfully</div>
            )}
            <div className="text-8xl font-cursive text-rose-400 flex justify-center">
              Register Form
            </div>
            <div className="pt-2 mt-4  ">
              <div>
                <label className="font-bold">Full Name</label>
                <br />
                <input
                  type="name"
                  placeholder="Enter your full name"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200 mt-4"
                />
                {formError.fullName && (
                  <div className="text-red-500">{formError.fullName}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="font-bold">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 border-b border-b-rose-200 mt-4"
                />
                {formError.email && (
                  <div className="text-red-500">{formError.email}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="font-bold">Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 mt-4 border-b border-b-rose-200"
                />
                {formError.password && (
                  <div className="text-red-500">{formError.password}</div>
                )}
              </div>
              <div className="mt-2">
                <label className="font-bold">Confirm Password</label>
                <br />
                <input
                  type="password"
                  placeholder="  Confirm password"
                  name="password"
                  value={formValues.cpassword}
                  onChange={handleChange}
                  className="shadow-lg rounded-2xl px-8 pt-2 w-[75%] pb-8 mb-4 mt-4 border-b border-b-rose-200"
                />
                {formError.password && (
                  <div className="text-red-500">{formError.cpassword}</div>
                )}
              </div>

              <div className="flex justify-between">
                <input type="checkbox" className="w-6 h-6 mt-2" />
                <span className="ml-4">Remember me</span>
                <div className="ml-32">Forget Password?</div>
              </div>
              <div className="pt-8">
                <button className="bg-rose-200 p-4 w-full text-white rounded-2xl shadow-2xl text-2xl">
                  Register
                </button>
                <div className="mt-8 flex justify-center ">
                  Already have an account?
                  <Link to="/signin">
                    <div className=" underline font-medium text-blue-500">
                      Log In
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
