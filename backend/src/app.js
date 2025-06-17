const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const flowerRoutes = require("./routes/flowerRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/flowers", flowerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;