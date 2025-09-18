require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const User = require("./models/user");
const Course = require("./models/courses");
const authRoutes = require("./routes/authRoutes");

const mongoose = require("mongoose");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", authRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Cloud");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

app.get("/", (req, res) => {
  res.send("Hello from Node.js API with MongoDB Cloud");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/api`);
});
