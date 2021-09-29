var express = require('express');
var router = express.Router();

const uploadFile = require('../../middlewares/multerAvatarMiddleware');
const validateRegisterUser = require('../../middlewares/validateRegisterUser');

const usersController = require('../../controllers/apiControllers/usersApiController')

/* GET register form */
router.get('/', usersController.listUsers)
/* GET register form */
router.get('/:idUser', usersController.detailUser)
/* POST register */
router.post('/register', validateRegisterUser, usersController.createUser)
/* POST login form */
router.post('/login', usersController.loginProcess)
/* GET edit account form */
router.get('/account/', usersController.userAccountForm)
/* POST edit account */
router.put('/account/:idUser', uploadFile.single('avatar'), usersController.userEditAccount)

module.exports = router;
