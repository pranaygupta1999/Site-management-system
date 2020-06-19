const { body } = require('express-validator');
module.exports = {
    UserValidation: [
        body('name', "Name is required").exists(),
        body('password', "Password is required").exists(),
        body('email', 'Email is required').isEmail().withMessage("Email is invalid").normalizeEmail(),
        body('role', "Invalid user role").isIn(['admin', 'guest']).withMessage("Role can only be one of 'admin' or 'guest'").optional()
    ],
    LoginValidation: [
        body('email', "Email is required").exists(),
        body('password', "Password is required").exists(),
    ]
};