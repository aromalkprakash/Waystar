import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv, { config } from "dotenv"
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();

dotenv.config()

app.use("/api/auth", authRoutes); 
const PORT = process.env.PORT || 8000

console.log(process.env.MONGO_URI)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

connectMongoDB()