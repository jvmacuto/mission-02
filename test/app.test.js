// Import necessary libraries
const { getCars } = require("../src/controller");
const express = require("express");
const bodyParser = require("body-parser");
const request = require("supertest");
const dbClient = require("../db/db-config");
// Initialize express app
const app = express();

//Load enviromental variable
require("dotenv").config();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import the router from routes
const userRouter = require("../src/routes");

//testing the api
describe("GET /", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

//testing the database connection
describe("Database connection", () => {
  it("should return true", async () => {
    const res = await dbClient.promise().query("SELECT 1");
    expect(res[0]).toEqual([{ 1: 1 }]);
  });

  //it should fetch all items from the controller
  // Assuming you have an Express app and a controller function tied to '/items'
  it("should fetch all items", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200); // Assuming a successful fetch returns HTTP 200
    expect(res.body).toBeInstanceOf(Object); // Assuming the response should be an array
    // Further assertions can be made based on the expected structure of the items
  });
});

//test
describe("getAllCars", () => {
  it("should return an object", async () => {
    const res = await request(app).get("/");
    expect(res.body).toBeInstanceOf(Object);
  });
});
// Define more routes here
app.use("/", userRouter.router);
