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
    body('address', "Address is required").exists(),
    body('startDate', "Start date is invalid").exists().custom(isValidDate),
    body('completionDate', 'End date is not valid').custom(isValidDate),
    body('expectedCompletionDate', "Invalid date").custom(isValidDate)
];