const express = require("express");
const app = express();
const mongoDB = require("mongodb");
const bodyParser = require("body-parser");

const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config({ path: "./config/.env" });
connectDB();

app.use("/", mainRoutes);

app.listen(5002, console.log("Server is running"));
