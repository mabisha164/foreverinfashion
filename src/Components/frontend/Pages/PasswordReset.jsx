import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PasswordReset = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/api/reset-password/${id}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();

      if (data.Status === "Success") {
        navigate("/signin");
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
      <div className="bg-opacity-80 absolute top-0 right-80 mr-[150px] mt-20">
        <div className="flex p-6 justify-center align-middle pt-8">
          <div className="bg-white-opacity-10 shadow-2xl p-4 rounded-ee-3xl rounded-se-3xl">
            <form className="w-full h-[250px]" onSubmit={handleSubmit}>
              <div className="text-3xl font-custom text-rose-500 flex justify-center">
                Enter Your Password
              </div>

              <div className="mt-6 ">
                <label className="font-serif text-gray-600 ">
                  New Password:
                </label>
                <br />
                <input
                  type="password"
                  placeholder="    Enter Password"
                  autoComplete="off"
                  name="password"
                  className="form-control rounded-lg w-[250px] mt-4 h-10 border-b-2 border-b-rose-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pt-8">
                <button
                  type="submit"
                  className="bg-rose-400 border-b-4 border-b-white p-2 ml-10 w-[50%] text-white text-center rounded-2xl shadow-2xl text-2xl font-custom"
                >
                  Update
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
