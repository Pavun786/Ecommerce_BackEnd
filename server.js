import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoute.js"

dotenv.config();

//DB config
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"))
app.use(cors({
    origin: "*"
}))

//routes:
app.use("/api/v1/auth",authRoutes);

app.use("/api/v1/category",categoryRoutes);

app.use("/api/v1/product",productRoutes);

app.get("/",(req,res)=>{
    res.send({message:"Welcome to ecommerce app"})
});

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})