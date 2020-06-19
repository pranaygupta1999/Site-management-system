const router = require('express').Router();
const UserController = require('../controllers/UserController');
const checkMasterUser = require('../middlewares/check_master-admin')
const UserValidation = require('../validation/UserValidation')
router.post('/login', UserValidation.LoginValidation, UserController.login);
router.post('/add', UserValidation.LoginValidation, checkMasterUser, UserValidation.UserValidation, UserController.addUser)
module.exports = router;

