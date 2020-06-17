const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    type: String,
    timeFrom: {
        type: Date,
        default: new Date
    },
    timeTo: Date,
    detail: String,
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project'
    },
    dateCreated: {
        type: Date,
        default: new Date
    }
});
module.exports = mongoose.model("activities", ActivitySchema);