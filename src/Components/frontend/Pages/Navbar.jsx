// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { MdShoppingCart } from "react-icons/md";
// import image5 from "./Images/image5.png";
// import { useCart } from "./CartContext";
// import { BsPersonFillAdd } from "react-icons/bs";
// import { AiOutlineLogout } from "react-icons/ai";
// // import { signout } from "./signout";
// // import { useAuth } from "../auth";
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [cart] = useCart();
//   // const { isAuthenticated, signOut } = useAuth();
//   const navigate = useNavigate();
//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/signin");
//   };
//   const userEmail = localStorage.getItem("userEmail");

//   return (
//     <nav className="border-4 border-white bg-blue-100 dark:bg-gray-800 dark:border-gray-700  w-full rounded-2xl shadow-xl">
//       <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <NavLink to="/" className="flex items-center">
//           <img className="h-14 w-16 rounded-3xl " src={image5} alt="Image 5" />
//           <span className="self-center whitespace-nowrap  text-black text-3xl italic font-cursive rounded bg-opacity-75 hover:text-pink-500 ">
//             foreverInfashion
//           </span>
//         </NavLink>
//         <button
//           onClick={handleMenuToggle}
//           type="button"
//           className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-hamburger"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`w-full ${isMenuOpen ? "block" : "hidden"}`}
//           id="navbar-hamburger"
//         >
//           <ul className="flex flex-row justify-center gap-10 font-medium mt-4 rounded-lg text-xl  italic dark:bg-gray-800 dark:border-gray-700 ">
//             <li>
//               <NavLink
//                 to="/"
//                 exact="true"
//                 className="block py-2 pl-3 pr-4 mr-6 text-green-600 text-2xl  hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl "
//                 // activeclassname="active"
//                 onClick={handleMenuToggle}
//               >
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/product"
//                 className="block py-2 pl-3 pr-4  text-green-600 text-2xl  hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
//                 // activeclassname="active"
//                 onClick={handleMenuToggle}
//                 exact="true"
//               >
//                 Product
//               </NavLink>
//             </li>

//             {localStorage.getItem("authToken") ? (
//               <li>
//                 {/* <NavLink
//                   to="/"
//                   exact="true"
//                   className="block py-2 pl-3 pr-4 text-black hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl "
//                   // activeclassname="active"
//                   onClick={handleMenuToggle}
//                 >
//                   My Orders
//                 </NavLink> */}
//               </li>
//             ) : (
//               ""
//             )}

//             {!localStorage.getItem("authToken") ? (
//               <div className="flex gap-10 ">
//                 <NavLink
//                   to="/signin"
//                   className="block py-1 pl-3 pr-4 text-green-600 text-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
//                   // activeClassName="active"
//                   onClick={handleMenuToggle}
//                   exact="true"
//                 >
//                   Sign In
//                 </NavLink>

//                 <NavLink
//                   to="/signup"
//                   className="block py-1 pl-3 pr-4 text-green-600 text-2xl rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                   // activeClassName="active"
//                   onClick={handleMenuToggle}
//                   exact="true"
//                 >
//                   Sign Up
//                 </NavLink>
//               </div>
//             ) : (
//               <div className="flex gap-16">
//                 <NavLink
//                   to="/dashboard"
//                   className="block h-12 w-26 py-2 pl-3 pr-4 text-2xl text-green-600  hover:bg-orange-200 hover:text-white hover:icons-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl "
//                   // activeclassname="active"
//                   onClick={handleMenuToggle}
//                   exact="true"
//                 >
//                   Dashboard
//                   {/* <MdShoppingCart size={30} color="black" />{" "} */}
//                 </NavLink>

//                 <li>
//                   <NavLink
//                     to="/cart"
//                     className="block  text-2xl h-12 w-26 py-2 pl-3 pr-4 text-green-600 relative hover:text-white hover:bg-orange-200 hover:icons-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
//                     // activeclassname="active"
//                     onClick={handleMenuToggle}
//                     exact="true"
//                   >
//                     <MdShoppingCart size={45} color="green" />{" "}
//                     <div className="absolute -top-5 left-12 bg-orange-600 text-white flex justify-center items-center h-10 w-10 rounded-full">
//                       {cart?.length}
//                     </div>
//                   </NavLink>
//                 </li>
//                 <div className="flex justify-center align-middle  ">
//                   <div className="w-[280px] flex ">
//                     <div className="ml-16 mt-4">
//                       {" "}
//                       <BsPersonFillAdd size={30} color="green" />
//                     </div>
//                     <div className="text-xl text-center text-green-600 mt-4">
//                       {userEmail}
//                     </div>
//                     <div className="ml-6">
//                       <button
//                         onClick={handleLogout}
//                         className="block  text-2xl h-12 w-16 py-2   px-5 mb-8  hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl "
//                       >
//                         <AiOutlineLogout size={30} color="red" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* </> */}
//             {/* )} */}
//             {/* <li>
//               <NavLink
//                 to="/signout"
//                 className="block py-2 pl-3 pr-4 text-gray-900 rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//                 activeclassname="active"
//                 onClick={() =>
//                   signout(() => {
//                     history.push("/");
//                   })
//                 }
//               >
//                 Sign Out
//               </NavLink>
//             </li> */}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import image5 from "./Images/image5.png";
import { useCart } from "./ContextReducer";
import { BsPersonFillAdd } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const [cart] = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };
  const userEmail = localStorage.getItem("userEmail");

  return (
    <nav className="border-4 border-white bg-blue-200 dark:bg-gray-800 dark:border-gray-700  w-full rounded-xl shadow-2xl">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <img className="h-14 w-16 rounded-3xl " src={image5} alt="Image 5" />
          <span className="self-center whitespace-nowrap  text-green-600 text-3xl italic font-custom rounded bg-opacity-75 hover:text-pink-500 ">
            foreverInfashion
          </span>
        </NavLink>

        <ul className="flex flex-row justify-center gap-10 font-medium mt-4 rounded-lg text-xl italic dark:bg-gray-800 dark:border-gray-700 ">
          <li>
            <NavLink
              to="/"
              exact={true}
              className="block py-2 pl-3 pr-4 mr-6 text-green-600 text-2xl  hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className="block py-2 pl-3 pr-4  text-green-600 text-2xl  hover:bg-orange-200 hover:text-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
              exact={true}
            >
              Product
            </NavLink>
          </li>

          {localStorage.getItem("authToken") && (
            <li>{/* Render My Orders NavLink */}</li>
          )}

          {!localStorage.getItem("authToken") ? (
            <div className="flex gap-10">
              <NavLink
                to="/signin"
                className="block py-1 pl-3 pr-4 text-green-600 text-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                exact={true}
              >
                Sign In
              </NavLink>

              <NavLink
                to="/signup"
                className="block py-1 pl-3 pr-4 text-green-600 text-2xl rounded-xl shadow-2xl hover:bg-orange-200 hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                exact={true}
              >
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="flex gap-16">
              <NavLink
                to="/dashboard"
                className="block h-12 w-26 py-2 pl-3 pr-4 text-2xl text-green-600  hover:bg-orange-200 hover:text-white hover:icons-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                exact={true}
              >
                Dashboard
                {/* <MdShoppingCart size={30} color="black" />{" "} */}
              </NavLink>

              <li>
                <NavLink
                  to="/cart"
                  className="block  text-2xl h-12 w-26 py-2 pl-3 pr-4 text-green-600 relative hover:text-white hover:bg-orange-200 hover:icons-white  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-xl shadow-2xl"
                  exact={true}
                >
                  <MdShoppingCart size={45} color="green" />{" "}
                  <div className="absolute -top-5 left-12 bg-orange-600 text-white flex justify-center items-center h-10 w-10 rounded-full">
                    {cart?.length}
                  </div>
                </NavLink>
              </li>
              <div className="flex justify-center align-middle  ">
                <div className="w-[280px] flex ">
                  <div className="ml-16 mt-4">
                    {" "}
                    <BsPersonFillAdd size={30} color="green" />
                  </div>
                  <div className="text-xl text-center text-green-600 mt-4">
                    {userEmail}
                  </div>
                  <div className="ml-6">
                    <button
                      onClick={handleLogout}
                      className="block  text-2xl h-12 w-16 py-2   px-5 mb-8  hover:bg-orange-200 hover:text-white rounded-xl shadow-2xl"
                    >
                      <AiOutlineLogout size={30} color="red" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
