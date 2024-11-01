const Todo = require("../models/Todo");

// define the route handler
exports.getTodo = async (req, res) => {

    try {
        // fetch all todo items from database
        const todoItems = await Todo.find({});

        // response
        res.status(200).json({
            success: true,
            data: todoItems,
            message: "Entire todo data has been retrieved",
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Service error: " + err.message,
        })

    }
}

exports.getTodoBy = async (req, res) => {
    try {
        // extract todo items basis on id
        const id = req.params.id;
        const todoItems = await Todo.findById({ _id: id });

        // data for todo items is not available;
        if (!todoItems) {
            return res.status(404).json({
                success: false,
                message: "No Data Found by Given id:" + err.message,
            });

        }
        // data for todo items is available
        res.status(200).json({
            success: true,
            data: todoItems,
            message: `Todo ${id} data successfully retrieved`,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Service error: " + err.message,
        })
    }
}