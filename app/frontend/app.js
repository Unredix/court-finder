import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Determine __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Serve index.html at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
