var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET register form */
router.get('/register', usersController.registerForm)
/* GET login form */
router.get('/login', usersController.loginForm)

module.exports = router;
