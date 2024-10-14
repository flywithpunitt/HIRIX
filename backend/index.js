import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://job-hunt-03qb.onrender.com',
    credentials: true,
};

app.use(cors(corsOptions));

// Set the port to 8000
const PORT = process.env.PORT || 8000;

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Current __dirname:", __dirname);

// Serve static files from the frontend
const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath));
console.log("Serving static files from:", distPath);

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Serve the React app for all other routes
app.get("*", (req, res) => {
    const indexPath = path.join(distPath, "index.html");
    console.log("Sending file:", indexPath);
    console.log("File exists:", fs.existsSync(indexPath));
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error("Failed to send index.html:", err);
            res.status(500).send("Error loading index.html");
        }
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});