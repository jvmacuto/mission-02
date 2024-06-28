// Import necessary libraries
const express = require("express");
const bodyParser = require("body-parser");

// Initialize express app
const app = express();

//Load enviromental variable
require("dotenv").config();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import the router from routes
const userRouter = require("./routes");

// Define a simple route

// Define more routes here
app.use("/", userRouter.router);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
