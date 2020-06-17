const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    address: {
        type: String
        //required:[true, "address is required"]
    },
    startDate:{
        type:Date,
        default: new Date
    },
    endDate: Date,
    completionDate: Date,
    expectedCompletionDate: Date,
    dateCreated:{
        type: Date,
        default: new Date
    }
});
module.exports = mongoose.model("Project", ProjectSchema);