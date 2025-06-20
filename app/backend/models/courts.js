const mongoose = require("mongoose");

const courtSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    surface: {
      type: String,
      required: true,
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
