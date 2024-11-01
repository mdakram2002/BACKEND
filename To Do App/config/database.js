const mongoose = require('mongoose')
require("dotenv").config();

const databaseUrl = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(databaseUrl, {
       
    })
        .then(() => console.log("Database connection established"))
        .catch((error) => {
            console.log("issue in Database connection");
            console.error(error.message);
            process.exit(1); //what is the meaning of?
        });
}
module.exports = dbConnect;