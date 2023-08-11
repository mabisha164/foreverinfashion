const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisAnitaLamichhaneMabishaKoirala"; // Use the same secret key you used before
const User = require("../models/User");
const requireSignIn = (req, res, next) => {
  const authToken = req.header("auth-token"); // Assuming you are sending the token in the "auth-token" header

  if (!authToken) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    const decodedToken = jwt.verify(authToken, jwtSecret);
    req.user = decodedToken.user; // Store the user data in the request for later use
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: "Access denied. Invalid token." });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
module.exports = { requireSignIn, isAdmin };
