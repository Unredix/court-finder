const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middleware/auth");

// User registration
router.post("/register", userController.registerUser);

// User login
router.post("/login", userController.loginUser);

// GET a user by ID
router.get("/:id", authenticateToken, userController.getUser);

// PUT to update a user by ID
router.put("/:id", authenticateToken, userController.updateUser);

// DELETE a user by ID
router.delete("/:id", authenticateToken, userController.deleteUser);

module.exports = router;
