const express = require("express");
const router = express.Router();
const courtsController = require("../controllers/courtsController");

// GET all courts
router.get("/", courtsController.getAllCourts);

// POST a new court
router.post("/", courtsController.createCourt);

// GET a court by ID
router.get("/:id", courtsController.getCourtById);

// PUT to update a court by ID
router.put("/:id", courtsController.updateCourt);

// DELETE a court by ID
router.delete("/:id", courtsController.deleteCourt);

// Example route for searching courts by name
router.get("/search", courtsController.searchCourts);

module.exports = router;
