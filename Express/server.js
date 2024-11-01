

// server instantiate
const express = require('express');
const app = express();


// used to parese the req.body in express --> PUT or POST
const bodyParser = require('body-parser');

// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());


// activate the server on 4000 port
app.listen(4000, () => {
    console.log("server listening on port no. 4000");
})


// Routes
app.get('/', (request, response) => {
    response.send("hello world!, welcome to BACKEND!");
})

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name); // fetch the name and brand from the request body
    console.log(brand);
    res.send("car summitted successfully!");
})

// connect to the server( mongoose with express)
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => { console.log("connection established") })
//     .catch((error) => {
//         console.error("Received an error: ", error);
//     });

// this above code gives a warning message: (node:17316) [MONGODB DRIVER]
//Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => { console.log("Connection established") })
    .catch((error) => {
        console.error("Received an error: ", error);
    });
