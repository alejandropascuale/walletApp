var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET register form */
router.get('/register', usersController.registerForm)

module.exports = router;
