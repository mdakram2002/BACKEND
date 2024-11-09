
const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());


// routes imports
const blog = require("./routes/blogs");

// mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();


// start the server
app.listen(3000, () => {
    console.log(`App is successfully listening at port ${PORT}`);
});


// default routes for seen home page
app.get("/", (req, res) => {
    res.send("<h1>This is Blogs Page</h1>")
});
