import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// // ✅ Configure CORS
const allowedOrigins = [
  'https://vercel-admin.vercel.app',
  'https://vercel-frontend.vercel.app', // your frontend
  "http://localhost:5173"
  ,'http://localhost:5175/' // dev frontend
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
async function startServer() {
  await connectDB();
  await connectCloudinary();
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port} 🚀`);
  });
}

startServer();
