const Activity = require("../models/ActivityModel");
module.exports = {
    getAllActivities: async function(req, res){
        const activities = await (await Activity.find().populate('project'));
        res.status(200).json(activities);
    },
    getTotalActivityCount: async function(req, res){
        const count = await Activity.find().count();
        res.status(200).json({count:count});
    }
}