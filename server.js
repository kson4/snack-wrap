const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", mainRoutes);

app.listen(5002, console.log("Server is running"));
