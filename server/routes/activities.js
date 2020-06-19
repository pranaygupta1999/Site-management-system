const router = require('express').Router();
const ActivityController = require('../controllers/ActivityController');
const ActivityValidation = require('../validation/ActivityValidation')
router.get('/getall', ActivityController.getAllActivities);
router.get('/gettotalcount', ActivityController.getTotalActivityCount);
router.post('/add', ActivityValidation, ActivityController.addActivity);
router.delete('/delete/:id', ActivityController.deleteActivity);
router.put('/edit', ActivityValidation, ActivityController.editActivity);
module.exports = router;

