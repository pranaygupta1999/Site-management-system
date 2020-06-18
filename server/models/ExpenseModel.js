const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    type: {
        type: String,
        required: [true, "type is required"]
    },
    detail: String,
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    status: {
        type: String,
        required: [true, "Status is required"]
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    },
    image: {
        type: String,
        required: [true, "Mode is required"]
    },
    date: {
        type: Date,
        required: [true, "Mode is required"]
    },
    dateCreated: {
        type: Date,
        default: new Date
    }
});
module.exports = mongoose.model("Expense", ExpenseSchema);