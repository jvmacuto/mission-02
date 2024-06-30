const express = require("express");
const router = express.Router();

const controller = require("./controller");

//display message

router.get("/", controller.getAllCars);

module.exports = { router };
