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
    body('name', "Name is required").exists(),
    body('type', "Type is required").exists(),
    body('detail', "Type is required"),
    body('timeFrom', "Start time is invalid").exists().custom(isValidDate),
    body('timeTo', 'End time is not valid').custom(isValidDate),
    body('project', "Invalid project id").exists().isAlphanumeric()
];