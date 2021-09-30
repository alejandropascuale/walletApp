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
            const defaultImageProfile = '/images/avatars/user-avatar.jpg';
            const newUserawait = await db.User.create ({
            email: req.body.email,   
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: defaultImageProfile,
        })
            res.json(newUserawait);
        }
        }
    },
    loginForm: (req, res) => {
        return res.render ('login-form');
    },
    loginProcess: async (req, res) => {
        const userToLogin = await db.User.findOne ({
            where: {email: req.body.email}
        })
        if(userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                req.session.userLogged = userToLogin;
                console.log(userToLogin);
                return res.json(userToLogin);
            } 
            /* return res.render('login-form', {
                oldData: req.body,
                errors: {
                    password: {
                        msg: 'Wrong password'
                    }
                }
            }); */
        }
        /* return res.render('login-form', {
            errors: {
                email: {
                    msg: 'Check your email'
                }
            }
        }); */
    },
    userAccountForm: async (req, res) => {
        const user = await db.User.findOne({
            where: {idUser: req.session.userLogged.idUser}
        }) 
        return res.render ('user-account',{user});
    },
    userEditAccount: async (req, res) => {    
        if (req.file) {
            const editUser = await db.User.update({
                email: req.body.email,   
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: '/images/avatars/'+req.file.filename
            },
            { where: {idUser: req.params.idUser}
        })
        console.log(req.file);
        console.log(req.body);
        console.log(editUser);
        return res.json(editUser);
    } else {
        let editUser = await db.User.update({
            email: req.body.email,   
            password: bcrypt.hashSync(req.body.password, 10),
        },
        { where: {idUser: req.params.idUser}
        })
            console.log(req.file);
            console.log(req.body);
            console.log(editUser);
            return res.json(editUser);
        }
    }
}

module.exports = controller;