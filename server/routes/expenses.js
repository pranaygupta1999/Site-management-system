const router = require('express').Router();
const ExpenseController = require('../controllers/ExpenseController');
const ExpenseValidation = require('../validation/ExpenseValidation')
router.get('/getall', ExpenseController.getAllExpenses);
router.get('/getsorted', ExpenseController.getSortedExpenses);
router.post('/add', ExpenseValidation, ExpenseController.addExpense);
router.delete('/delete/:id', ExpenseController.deleteExpense);
router.put('/edit', ExpenseValidation, ExpenseController.editExpense);
module.exports = router;

