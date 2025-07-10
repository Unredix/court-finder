const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const connectDB = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
  await connectDB();
  app.use("/api", routes);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
