const userModel = require("../src/model");

const index = (req, res) => {
  res.status(200).json({ message: "you are at the very first page" });
};

const home = (req, res) => {
  res.status(200).json({ message: "welcome home" });
};

const getAllCars = (req, res) => {
  userModel.queryAllCars().then((data) => {
    res.status(200).json(data);
  });
};

module.exports = { index, home, getAllCars };
