const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

const flowerRoutes = require("./routes/flowerRoutes");

app.use("/api/flowers", flowerRoutes);


module.exports = app;