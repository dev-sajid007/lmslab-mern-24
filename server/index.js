import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import UserRouter from "./routes/UserRouter.js";
dotenv.config();


//call db cinnection
connectDB();

const app = express();

const PORT = process.env.PORT || 8000;


//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}));

//api's
app.use("/api/v1/user",UserRouter);

app.listen(PORT,() => {
  console.log(`Server listen at port ${PORT}`);
  
})