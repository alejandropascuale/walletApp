const { body } = require('express-validator');

module.exports = [
	body('email')
		.notEmpty().withMessage('Tienes que escribir un email').bail()
		.isEmail().withMessage('Debes escribir un formato de email válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
]