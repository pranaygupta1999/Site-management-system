const {validationResult} = require('express-validator')
const User = require("../models/UserModel");
module.exports = {
    login: async function(req, res){
        const errors = validationResult(req);
        if(errors){
            res.status(400).json(errors.array());
            return;
        }
        const {email} = req.body;
        await User.findOne(email)
    }
}