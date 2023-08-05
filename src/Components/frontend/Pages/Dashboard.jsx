import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-600 flex justify-center p-10">
        Dashboard page
      </h1>
      <div className="flex justify-center align-middle">
        <div className="text-xl font-bold bg-blue-400 h-16 w-36 flex justify-center align-middle rounded-lg ">
          <Link to="/Profile">Profile</Link>
        </div>
        <div className="text-xl font-bold bg-blue-400 h-16 w-36 flex justify-center align-middle rounded-lg mt-10">
          <Link to="/order">Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
