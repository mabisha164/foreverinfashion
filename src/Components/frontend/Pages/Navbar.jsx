import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { signout } from "./signout";
// import { useAuth } from "../auth";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { isAuthenticated, signOut } = useAuth();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 bg-blue-100 dark:bg-gray-800 dark:border-gray-700  w-full rounded-2xl shadow-xl">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=2000"
            className="h-10 mr-3 rounded-xl"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap  text-black text-3xl italic font-cursive rounded bg-opacity-75 hover:text-pink-500 ">
            foreverInfashion
          </span>
        </NavLink>
        <button
          onClick={handleMenuToggle}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full ${isMenuOpen ? "block" : "hidden"}`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-row justify-center gap-20 font-medium mt-4 rounded-lg text-xl  italic dark:bg-gray-800 dark:border-gray-700 ">
            <li>
              <NavLink
                to="/"
                exact="true"
                className="block py-2 pl-3 pr-4 text-black hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl "
                // activeclassname="active"
                onClick={handleMenuToggle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="block py-2 pl-3 pr-4  text-gray-900  hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                // activeclassname="active"
                onClick={handleMenuToggle}
                exact="true"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-orange-200 hover:text-white  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                // activeclassname="active"
                onClick={handleMenuToggle}
                exact="true"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                // activeclassname="active"
                onClick={handleMenuToggle}
                exact="true"
              >
                Cart
              </NavLink>
            </li>
            {/* {isAuthenticated ? (
              <>
                <li>
                  
                  <NavLink
                    to="/signout"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                   
                  </NavLink>
                </li>
              </>
            ) : (
              <> */}
            <li>
              <NavLink
                to="/signin"
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                // activeClassName="active"
                onClick={handleMenuToggle}
                exact="true"
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                // activeClassName="active"
                onClick={handleMenuToggle}
                exact="true"
              >
                Sign Up
              </NavLink>
            </li>
            {/* </> */}
            {/* )} */}
          </ul>
          {/* <li>
              <NavLink
                to="/signout"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                activeclassname="active"
                onClick={() =>
                  signout(() => {
                    history.push("/");
                  })
                }
              >
                Sign Out
              </NavLink>
            </li> */}
          {/* </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
