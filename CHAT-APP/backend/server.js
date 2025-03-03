import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import {connect}  from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse  the incoming request  with json  paylods (from req.body)
app.use(cookieParser());


// app.get("/", (req, res) => {
//   // Root route http://localhost:5000/
//   res.send("Hello World!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);




app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});


const MONGO_DB_URI = process.env.MONGO_DB_URI;

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await connect(MONGO_DB_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true, 
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};