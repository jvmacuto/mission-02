const express = require("express");
const router = express.Router();

const controller = require("./controller");

//display message

router.get("/", controller.index);

router.get("/home", controller.home);

//get all cars
router.get("/cars", controller.getAllCars);

module.exports = { router };
