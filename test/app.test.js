//importing the required modules
const express = require("express");
const bodyParser = require("body-parser");

//initialize express app
const userRouter = require("../src/routes");
const request = require("supertest");

const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//testing the get request

describe("Cars Route", () => {
  test("It should respond with 200 status code", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Responds with json content", async () => {
    const response = await request(app).get("/");
    expect(response.headers["content-type"]).toMatch("json");
  });
});

//Use a specific path
app.use("/", userRouter.router);
