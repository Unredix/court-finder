const mongoose = require("mongoose");
require("dotenv").config();

// Add a log to show when attempting to connect
console.log("Attempting to connect to MongoDB at", process.env.MONGO_URI);

const connectDB = async () => {
  try {
    console.log("About to call mongoose.connect...");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose.connect resolved");
    if (conn && conn.connection && conn.connection.readyState === 1) {
      console.log("MongoDB connected successfully");
    } else {
      console.log("mongoose.connect did not throw, but connection not ready");
    }
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
