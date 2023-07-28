// // AuthForm.jsx (Parent component)
// import React, { useState } from "react";
// import { SignUp } from "./SignUp";
// import Signin from "./signin";

// const AuthForm = () => {
//   const [showLogin, setShowLogin] = useState(true);

//   const switchToLogin = () => {
//     setShowLogin(true);
//   };

//   const switchToSignUp = () => {
//     setShowLogin(false);
//   };

//   return (
//     <div>
//       {showLogin ? (
//         <Signin onFormSwitch={switchToSignUp} />
//       ) : (
//         <SignUp onFormSwitch={switchToLogin} />
//       )}
//     </div>
//   );
// };

// export default AuthForm;
