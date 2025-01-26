const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
    })
    .then(console.log("Database connection established"))
    .catch((error) => {
      console.log("Error connecting Issue");
      console.log(error);
      process.exit(1);
    });
};
