const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

console.log("Connecting to MongoDB with URI:", uri);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Connection error:", err);
    process.exit(1);
  });
