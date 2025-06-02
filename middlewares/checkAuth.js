/**
 * Authentication Middleware
 * Verifies JWT tokens in request headers and attaches user information to the request object
 */

const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];  // Format: "Bearer <token>"

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    // Verify the token using the secret key from environment variables
    const secret = process.env.SECRET;
    const decoded = jwt.verify(token, secret);
    
    // Attach the decoded user information to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid tokens
    return res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = checkAuth;
