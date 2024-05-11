import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv, { config } from "dotenv"

const app = express();
dotenv = config()

app.use("/api/auth", authRoutes); 

console.log(process.env.MONGO_URI)

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
