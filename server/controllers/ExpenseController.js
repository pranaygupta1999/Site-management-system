const Expense = require("../models/ExpenseModel");
const { validationResult } = require('express-validator')

module.exports = {
    getAllExpenses: async function (req, res) {
        const expenses = await Expense.find().populate('project');
        res.status(200).json(expenses);
    },
    getSortedExpenses: async function (req, res) {
        const expenses = await Expense.find().sort("date").populate('project');
        res.status(200).json(expenses);
    },
    addExpense: async function (req, res) {
        const errors = validationResult(req)
        if (errors.array().length) {
            res.status(400).json({ msg: "Insertion of Expense failed", err: errors.array() });
            return;
        }
        try {
            const expense = new Expense(req.body);
            await expense.save();
            res.status(200).json({ msg: "Expense added successfully" })
        } catch (error) {
            res.status(500).json({ msg: "Insertion of expense faild", err: error });
        }
    },
    deleteExpense: async function (req, res) {
        try {
            const result = await Expense.remove({ _id: req.params.id });
            res.status(200).json({ msg: "Expense deleted successfully", details: result });
        } catch (error) {
            res.status(500).json({ msg: "Could not delete activity", err: error });
        }
    },
    editExpense: async function (req, res) {
        try {
            const result = await Expense.updateOne({ _id: req.body._id }, { $set: req.body });
            res.status(200).json({ msg: "Expense deleted successfully", details: result });
        } catch (error) {
            res.status(500).json({ msg: "Could not update expense", err: error });

        }
    }
}