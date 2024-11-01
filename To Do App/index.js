// const express = require('express');
// const app = express();

// app.listen(3000, () =>{
//     console.log('App is successfully listening');
// });

const express = require('express');
const app = express();

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());


// import routes from TODO api
const todoRoutes = require('./routes/todo');

// mount/add/append the todo api routes
app.use("/api/v1", todoRoutes)

app.listen(5000, () => {
    console.log(`App is successfully listening at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();


//default routes
app.use("/", (req, res) => {
    res.send("<h1>This is Homepage</h1>")
});

// start the server
app