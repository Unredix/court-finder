const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/auth");
const { validateRegister, validateLogin } = require("../middleware/validation");
const { authLimiter } = require("../middleware/rateLimit");

// User registration
router.post(
  "/register",
  authLimiter,
  validateRegister,
  userController.registerUser
);

// User login
router.post("/login", authLimiter, validateLogin, userController.loginUser);

// GET user's own profile (must be before :id route)
router.get("/profile", authenticateToken, userController.getProfile);

// GET a user by ID
router.get("/:id", authenticateToken, userController.getUser);

// PUT to update a user by ID
router.put("/:id", authenticateToken, userController.updateUser);

// DELETE a user by ID
router.delete("/:id", authenticateToken, userController.deleteUser);

module.exports = router;
