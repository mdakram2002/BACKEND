const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {

    try {
        // fetch the id from the rquest parameters
        const { id } = req.params;
    
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            menubar: "Deleted Successfully",
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