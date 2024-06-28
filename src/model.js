const pool = require("../db/db-config");

const queryAllCars = () => {
  return pool
    .promise()
    .query("SELECT * FROM cars")
    .then((result) => result[0])
    .catch((err) => console.log(err));
};

module.exports = {
  queryAllCars,
};
