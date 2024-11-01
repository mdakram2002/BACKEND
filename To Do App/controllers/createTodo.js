// import the model
const Todo = require("../models/Todo");

// define the route handlers

exports.createTodo = async (req, res) => {
    try {
        // extract title and description from request body
        const { title, description } = req.body;

        // create a new Todo object and insert it into the DB
        const response = await Todo.create({ title, description });

        // send a json response with the success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entery Created Successfully"

        })
    }
    catch (err) {
        console.error(err);
        console.log("fetching the Error");
        res.status(500).json({
            success: false,
            data: "internal Server Error",
            message: err.message,
        });
    }
}