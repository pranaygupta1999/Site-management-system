const router = require('express').Router();
const UserController = require('../controllers/UserController');
const UserValidation = require('../validation/UserValidator')
router.post('/login',UserValidation,UserController.login);

module.exports = router;

