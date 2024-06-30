const userModel = require("../src/model");

const getAllCars = (req, res) => {
  userModel.queryAllCars().then((data) => {
    const dataString = JSON.stringify(data);
    res.status(200).send(dataString);

    // Parse the string back to an object
    const parsedData = JSON.parse(dataString);

    // Assuming parsedData is an array of car objects
    parsedData.forEach((car) => {
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

      console.log(
        `PRICE OF ${carName} is $${addCarNameNumbers * 100 + carYear}`
      );
    });
  });
};

module.exports = { getAllCars };
