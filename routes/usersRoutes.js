var express = require('express');
var router = express.Router();

const uploadFile = require('../middlewares/multerAvatarMiddleware');
const validateRegisterUser = require('../middlewares/validateRegisterUser');

const usersController = require('../controllers/usersController')

/* GET register form */
router.get('/register', usersController.registerForm)
/* POST register */
router.post('/register', uploadFile.single('avatar'), validateRegisterUser, usersController.createUser)
/* GET login form */
router.get('/login', usersController.loginForm)
/* POST login form */
router.post('/login', usersController.loginProcess)
/* GET logout */
router.get('/logout', usersController.logoutUser)
/* GET edit account form */
router.get('/account/:idUser', usersController.userAccountForm)
/* POST edit account */
router.put('/account/', uploadFile.single('avatar'), usersController.userEditAccount)

module.exports = router;
