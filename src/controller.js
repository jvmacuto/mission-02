const userModel = require("../src/model");

const carObject = {};

const getAllCars = (req, res) => {
  userModel.queryAllCars().then((data) => {
    data.forEach((car) => {
      const carName = String(car.name);
      const carYear = car.year;

      let addCarNameNumbers = 0;
      const carNameAsNumbers = carName
        .toUpperCase()
        .split("")
        .map((char) => {
          //check if the char is a letter
          if (char >= "A" && char <= "Z") {
            return (addCarNameNumbers +=
              char.charCodeAt(0) - "A".charCodeAt(0) + 1);
          } else {
            return char;
          }
        });
      carObject[carName] = {
        addCarNameNumbers: addCarNameNumbers * 100 + carYear,
        carYear: carYear,
      };
    });
    console.log(carObject);
    res.send(carObject);
  });

  //send a message to app.test.js
};

module.exports = { getAllCars };
