const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bp = require("body-parser");
dotenv.config();

app.set("view engine", "ejs");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use("/", require("./routes/infoRoutes"));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT));
