const express = require("express");
const router = express.Router();

// Courts routes
const courtsRoutes = require("./courts");
router.use("/courts", courtsRoutes);

// Export the router
module.exports = router;
