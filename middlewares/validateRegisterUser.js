const { body } = require('express-validator');

module.exports = [
	body('email')
		.notEmpty().withMessage('You have to write an email').bail()
		.isEmail().withMessage('You must write a valid email format'),
	body('password').notEmpty().withMessage('You have to write an password')
]