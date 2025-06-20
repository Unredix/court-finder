const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/auth");

// GET all users
router.get("/", authenticateToken, userController.getAllUsers);

// POST a new user
router.post("/", userController.createUser);

// GET a user by ID
router.get("/:id", authenticateToken, userController.getUser);

// PUT to update a user by ID
router.put("/:id", authenticateToken, userController.updateUser);

// DELETE a user by ID
router.delete("/:id", authenticateToken, userController.deleteUser);

// User login
router.post("/login", userController.loginUser);

// User registration
router.post("/register", userController.registerUser);

module.exports = router;
