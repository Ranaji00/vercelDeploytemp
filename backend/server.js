import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// import { seedProducts } from "./seedProducts.js"; // import the seed function

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

async function startServer() {
  await connectDB();
  await connectCloudinary();
  // await seedProducts();  // seed fixed products after DB connection

  //Middlewares
  app.use(express.json());
  app.use(cors());

  //API endpoints
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/cart", cartRouter);
  app.use("/api/order", orderRouter);

  app.get("/", (req, res) => {
    res.send("API WORKING");
  });

  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} ❤️`);
  });
}

startServer();
