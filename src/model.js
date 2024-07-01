const pool = require("../db/db-config");

const queryAllCars = () => {
  return pool
    .promise()
    .query("SELECT * FROM cars")
    .then(([rows]) => {
      return rows;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  queryAllCars,
};
