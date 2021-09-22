const express = require('express');
const router = express.Router ();
const db = require ('../database/models');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const controller = {
    registerForm: (req, res) => {
        return res.render ('register-form');
    },
    createUser: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('register-form', {
                errors: resultValidation.mapped(),
				oldData: req.body
			});
		} else {
            if (await db.User.findOne({
            where: {email: req.body.email}
        })) {
            return res.render('register-form', {
                oldData: req.body,
                errors: {
                    email: {
                        msg: 'The email is already registered'
                    }
                }
            });
        } else {
            const defaultImageProfile = '/images/avatars/user-buisness-avatar.jpg'
            await db.User.create ({
            email: req.body.email,   
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: defaultImageProfile,
        })
            res.render('register-ok');
        }
        }
    },
    loginForm: (req, res) => {
        return res.render ('login-form');
    }
}

module.exports = controller;