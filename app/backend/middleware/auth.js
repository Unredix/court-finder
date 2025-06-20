require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log("In authenticateToken, token:", token);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log("JWT verification error:", err);
      return res.sendStatus(403);
    }
    console.log("JWT verified, user:", user);
    req.user = user;
    next();
  });
};

const generateToken = (user) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
};

module.exports = {
  authenticateToken,
  generateToken,
};
