const { validationResult } = require('express-validator')
const User = require("../models/UserModel");
const bycrypt = require('bcrypt');
module.exports = {
    login: async function (req, res) {
        const errors = validationResult(req);
        if (errors.array().length) {
            res.status(400).json(errors.array());
            return;
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user)
            return res.status(404).json({ msg: "Username doesnot exist" });
        const validPassword = await bycrypt.compare(req.body.password, user.password);
        if (!validPassword)
            return res.status(401).json({ msg: "Invalid password" });
        res.status(200).json(user);
    },
    addUser: async function (req, res) {
        const errors = validationResult(req);
        if (errors.array().length) {
            res.status(400).json(errors.array());
            return;
        }
        const emailExists = await User.findOne({ email: req.body.email });
        if (emailExists) {
            res.status(400).json({ msg: "User already exists" });
            return;
        }
        try {
            const salt = await bycrypt.genSalt(10);
            req.body.password = await bycrypt.hash(req.body.password, salt);
            const user = new User(req.body);
            const result = await user.save();
            res.status(200).json({ msg: "Added user successfully", result: result })
        } catch (error) {
            res.status(500).json({ msg: "Some error occured", err: error })
        }
    }
}