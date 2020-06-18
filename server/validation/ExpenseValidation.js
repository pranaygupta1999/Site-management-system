const { body } = require('express-validator');
function isValidDate(date) {

    const value = new Date(date);
    if (value != "Invalid Date" || !date) {
        return true;
    }
    else {
        throw new Error("Date is not valid")
    };
}
module.exports = [
    body('type', "Type is required").exists(),
    body('amount', "Amount is required").exists().isNumeric(),
    body('status', "Status is required").exists(),
    body('project', "Invalid project id").exists().isAlphanumeric(),
    body('image', "Mode is required").exists(),
    body('date', "Date is invalid").exists().custom(isValidDate)
];