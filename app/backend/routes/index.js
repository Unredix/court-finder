const express = require("express");
const router = express.Router();

// Courts routes
const courtsRoutes = require("./courts");
router.use("/courts", courtsRoutes);

// Users routes
const userRoutes = require("./user");
router.use("/users", userRoutes);

// Export the router
module.exports = router;
