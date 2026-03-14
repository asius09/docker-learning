import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/", userRoutes);

// Database Connection
connectDB().then(() => {});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
