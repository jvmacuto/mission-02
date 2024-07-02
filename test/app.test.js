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

describe("getAllCars", () => {
  it("should return an object", async () => {
    const res = await request(app).get("/");
    expect(res.body).toBeInstanceOf(Object);
    //get the properties of object carObject
    const carObject = res.body;
  });

  it("should return the values of the object", async () => {
    const res = await request(app).get("/");
    expect(res.body).toBeInstanceOf(Object);
    //get the properties of object carObject
    const carObject = res.body;
    for (const carName in carObject) {
      if (carObject.hasOwnProperty(carName)) {
        // Check if the property is directly on carObject and not inherited
        const carDetails = carObject[carName];
      }
    }
  });

  describe("getAllCars", () => {
    //test case 1
    it("the object should return a name and a positive year", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[0]].nameCar).toBeDefined();
      expect(carObject[Object.keys(carObject)[0]].carYear).toBeGreaterThan(0);
    });

    //test case 2
    it("should accept a random word and a negative year", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[1]].nameCar).toBeDefined();
      expect(carObject[Object.keys(carObject)[1]].carYear).toBeLessThan(0);
    });

    //test case 3
    it("should accept a string with a number and accept a random number as a year", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[2]].nameCar).toBeDefined();
      expect(carObject[Object.keys(carObject)[2]].carYear).toBeGreaterThan(0);
    });

    //test case 4
    it("should accept a name with dashes and accept a random number as a year", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[3]].nameCar).toMatch(/-/);
      expect(carObject[Object.keys(carObject)[3]].carYear).toBeGreaterThan(0);
    });

    //test case 5
    it("should fail if the name is empty and the year is negative", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[4]].nameCar).toBe("null");
      expect(carObject[Object.keys(carObject)[4]].carYear).toBeGreaterThan(0);
    });

    //test case 6
    it("should fail if the year entered is not a number", async () => {
      const res = await request(app).get("/");
      const carObject = res.body;
      expect(carObject[Object.keys(carObject)[5]].nameCar).toBeDefined();
      expect(carObject[Object.keys(carObject)[5]].carYear).toBe(null);
    });
  });
});

// Define more routes here
app.use("/", userRouter.router);
