const Project = require("../models/ProjectModel");
const { validationResult } = require('express-validator')

module.exports = {
    getAllProjects: async function (req, res) {
        const projects = await Project.find();
        res.status(200).json(projects);
    },
    getTotalProjectCount: async function (req, res) {
        const count = await Project.find().count();
        res.status(200).json({ count: count });
    },
    getActiveProjects: async function (req, res) {
        const activeProjects = await Project.find(
            {
                "$or": [
                    { completionDate: { "$gt": new Date(Date.now()) } },
                    { completionDate: null }
                ]
            }
        );
        res.status(200).json(activeProjects);
    },
    getCompletedProjects: async function (req, res) {
        const completedProjects = await Project.find(
            {
                completionDate:
                {
                    "$lt": new Date(Date.now())
                }
            }
        );
        res.status(200).json(completedProjects);
    },
    getActiveProjectsCount: async function (req, res) {
        const count = await Project.find(
            {
                "$or": [
                    { completionDate: { "$gt": new Date(Date.now()) } },
                    { completionDate: null }
                ]
            }
        ).count();
        res.status(200).json({ count: count });
    },
    getCompletedProjectsCount: async function (req, res) {
        const count = await Project.find(
            {
                completionDate:
                {
                    "$lt": new Date(Date.now())
                }
            }
        ).count();
        res.status(200).json({ count: count });
    },
    addProject: async function (req, res) {
        const errors = validationResult(req)
        if (errors.array().length) {
            res.status(400).json({ msg: "Insertion of Project failed", err: errors.array() });
            return;
        }
        try {
            const project = new Project(req.body);
            await project.save();
            console.log("Saved project")
            res.status(200).json({ msg: "Project added successfully" })
        } catch (error) {
            res.status(500).json({ msg: "Insertion of project faild", err: error });
        }
    },
    getProjectNames: async function (req, res) {
        const projects = await Project.find({}, { name: 1 });
        res.status(200).json(projects);
    }

}