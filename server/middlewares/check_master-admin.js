const User = require("../models/UserModel")
module.exports = async function(req, res, next){
    const {email, password} = await User.find({email:email, password:password});
} 