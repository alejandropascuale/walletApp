const express = require('express');
const router = express.Router ();
const db = require ('../../database/models');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const controller = {
    listUsers: async (req, res) => {
        const users = await db.User.findAll({});
        return res.json(users);
    },
    detailUser: async (req, res) => {
        const user = await db.User.findOne({
            where: {idUser: req.params.idUser}
        });
        return res.json(user);
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
    },
    loginProcess: (req, res) => {
        db.User.findOne ({
            where: {email: req.body.email}
        }).then ((userToLogin) => {
            if(userToLogin) {
                let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
                if (isOkThePassword) {
                    req.session.userLogged = userToLogin;
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    return res.redirect('/');
                } 
                return res.render('login-form', {
                    oldData: req.body,
                    errors: {
                        password: {
                            msg: 'Wrong password'
                        }
                    }
                });
            }
            return res.render('login-form', {
                errors: {
                    email: {
                        msg: 'Check your email'
                    }
                }
            });
        })
    },
    logoutUser: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
    userAccountForm: async (req, res) => {
        const user = await db.User.findOne({
            where: {idUser: req.session.userLogged.idUser}
        }) 
        return res.render ('user-account',{user});
    },
    userEditAccount: async (req, res) => {    
        console.log(req.body);
        if (req.file) {
            await db.User.update({
            email: req.body.email,   
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: '/images/avatars/'+req.file.filename
            },
            { where: {idUser: req.session.userLogged.idUser}
            })
            return res.redirect (303, '/');
        } else {
            await db.User.update({
                email: req.body.email,   
                password: bcrypt.hashSync(req.body.password, 10),
            },
            { where: {idUser: req.session.userLogged.idUser}
            })
            return res.redirect (303, '/');
        }
    }
}

module.exports = controller;