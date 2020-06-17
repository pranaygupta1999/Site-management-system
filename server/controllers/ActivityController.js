const Activity = require("../models/ActivityModel");
const { validationResult } = require('express-validator')

module.exports = {
    getAllActivities: async function (req, res) {
        const activities = await (await Activity.find().populate('project'));
        res.status(200).json(activities);
    },
    getTotalActivityCount: async function (req, res) {
        const count = await Activity.find().count();
        res.status(200).json({ count: count });
    },
    addActivity: async function (req, res) {
        const errors = validationResult(req)
        if (errors.array().length) {
            res.status(400).json({ msg: "Insertion of Activity failed", err: errors.array() });
            return;
        }
        try {
            const activity = new Activity(req.body);
            await activity.save();
            res.status(200).json({ msg: "Activity added successfully" })
        } catch (error) {
            res.status(500).json({ msg: "Insertion of activity faild", err: error });
        }
    },
}