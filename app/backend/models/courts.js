const mongoose = require("mongoose");

const courtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: [
        "Tennis",
        "Basketball",
        "Badminton",
        "Squash",
        "Volleyball",
        "Padel",
      ],
    },
    accessibility: {
      type: String,
      required: true,
      enum: [
        "Wheelchair Accessible",
        "Not Wheelchair Accessible",
        "Limited Accessibility",
        "No Accessibility Features",
      ],
    },
    equipment: {
      type: String,
      required: true,
      enum: ["Available for Rent", "Free", "Not Available"],
    },
    features: {
      type: [String], // Array of features like "WiFi", "Lighting", etc
      required: false,
    },
    lighting: {
      type: String,
      required: true,
      enum: ["Daylight", "Artificial", "Both", "None"],
    },
    indoorOutdoor: {
      type: String,
      required: true,
      enum: ["Indoor", "Outdoor", "Both"],
    },
    location: {
      type: String,
      required: true,
    },
    surface: {
      type: String,
      required: true,
      enum: ["Clay", "Grass", "Hard", "Carpet", "Wood"],
    },
    numofCourts: {
      type: Number,
      required: true,
      min: 1, // At least one court
    },
    availableTimes: {
      type: [String], // Array of time slots in HH:MM format
      required: true,
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: {
      type: [String], // Array of image URLs
      required: false,
    },
    ratings: {
      type: [Number], // Array of ratings
      required: false,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true }
);

const Court = mongoose.model("Court", courtSchema);
module.exports = Court;
