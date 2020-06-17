const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    role:{
        type: String,
        enum: ['admin', 'guest'],
        default: 'guest'
    },
    dateCreated:{
        type: Date,
        default:Date.now
    }
});
module.exports = mongoose.model("users", UserSchema);