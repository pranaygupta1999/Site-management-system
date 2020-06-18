const router = require('express').Router();
const projectValidation = require('../validation/ProjectValidation')
const ProjectController = require('../controllers/ProjectController');

router.get('/getall', ProjectController.getAllProjects);
router.get('/gettotalcount', ProjectController.getTotalProjectCount);
router.get('/getactive', ProjectController.getActiveProjects);
router.get('/getactivecount', ProjectController.getActiveProjectsCount);
router.get('/getcompleted', ProjectController.getCompletedProjects);
router.get('/getcompletedcount', ProjectController.getCompletedProjectsCount);
router.post('/add', projectValidation, ProjectController.addProject);
router.get('/getnames', ProjectController.getProjectNames);
router.delete('/delete/:id', ProjectController.deleteProject);
router.put('/edit/', ProjectController.editProject);
module.exports = router;

