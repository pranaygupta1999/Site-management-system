const User = require("../models/UserModel")
const { validationResult } = require('express-validator')
module.exports = async function (req, res, next) {
    const errors = validationResult(req);
    if (errors.array().length) {
        res.status(400).json(errors.array());
        return;
    };
    try {
        const { email, password, role } = await User.findOne({ email: req.body.email, password: req.body.password });
        if (role === "master-admin") {
            req.body = req.body.user;
            next();
        }
    } catch (error) {
        res.status(500).json({ msg: "Some error occured", err: error })
    }

} 