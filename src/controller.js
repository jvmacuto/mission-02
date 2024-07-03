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

      if (carNameAsNumbers.length > 0) {
        carObject[carName] = {
          nameCar: carName,
          addCarNameNumbers: addCarNameNumbers * 100 + parseInt(carYear),
          carYear: parseInt(carYear),
        };
      }
    });
    for (const carName in carObject) {
      if (carObject.hasOwnProperty(carName)) {
        // Check if the property is directly on carObject and not inherited
        const carDetails = carObject[carName];
        console.log(
          `Car Name: ${carName}, Total: ${carDetails.addCarNameNumbers}, Year: ${carDetails.carYear}`
        );
      }
    }
    res.json(carObject);
  });

  //send a message to app.test.js
};

module.exports = { getAllCars };