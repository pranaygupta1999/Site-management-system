const router = require('express').Router();
const ActivityController = require('../controllers/ActivityController');

router.get('/getall',ActivityController.getAllActivities);
router.get('/gettotalcount',ActivityController.getTotalActivityCount);

module.exports = router;

