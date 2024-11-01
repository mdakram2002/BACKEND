const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    createdAt: {  // Corrected from createAt to createdAt
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,  // Corrected the typo 'ttype' to 'type'
        default: Date.now,
    }
});

module.exports = mongoose.model("Todo", todoSchema);
// what is schema?
// descroption of your data is schema.