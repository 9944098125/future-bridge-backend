require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const moviesRoute = require("./routes/movies");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://srinivas:thisisasecret@cluster0.pll6b.mongodb.net/blogs"
    );
    console.log("MongoDB database connected successfully");
  } catch (err) {
    throw err;
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Database Disconnecting...");
});
// if the database gets re-connected
mongoose.connection.on("connected", () => {
  console.log("MongoDB Database Connecting...");
});

app.use("/api", moviesRoute);

app.use((err, req, res, next) => {
  const errMessage = err.message || "Something went wrong";
  const errStatus = err.status || 400;
  console.log(err.stack);
  return res.status(errStatus).json({
    success: false,
    message: errMessage,
    status: errStatus,
    stack: err.stack,
  });
});

const port = 5000;

app.listen(port, () => {
  connect();
  console.log(`App is now running on port ${port}`);
});
