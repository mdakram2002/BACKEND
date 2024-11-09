
const mongoose = require('mongoose')
require("dotenv").config(); // load the env. process in config

const databaseUrl = process.env.DATABASE_URL;
const connectWithDb = () => {
    mongoose.connect(databaseUrl, {
    })
        .then(() => console.log("Database connection established"))
        .catch((error) => {
            console.log("issue in Database connection");
            console.error(error.message);
            process.exit(1);
        });
}
module.exports = connectWithDb;