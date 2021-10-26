const express = require('express');
const router = express.Router ();
const axios = require('axios');
const { Op } = require("sequelize");
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const controller = {
    registerForm: (req, res) => {
        return res.render ('register-form');
    },
    createUser: async (req, res) => {
        await axios({ url :'http://localhost:3001/api/users/register', method: 'post', data: req.body})
        return res.redirect('http://localhost:3000/users/registerOK');
    },
    loginForm: (req, res) => {
        return res.render ('login-form');
    },
    loginProcess: async (req, res) => {
        const user = (await axios({ url :'http://localhost:3001/api/users/login', method: 'post', data: req.body})).data
        res.cookie('userEmail', user.email, { maxAge: (1000 * 60) * 60 })
        return res.redirect('http://localhost:3000');
    },
    logoutUser: async (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('http://localhost:3000/');
	},
    userAccountForm: async (req, res) => {
        const user = (await axios.get(`http://localhost:3001/api/users/${req.session.userLogged.idUser}`)).data;
        return res.render ('user-account',{user});
    },
    userEditAccount: async (req, res) => {    
        await axios({ url :`http://localhost:3001/api/users/account/${req.session.userLogged.idUser}`, method: 'put', data: req.body});
        return res.redirect (303, 'http://localhost:3000/');
        /* const body = {data: req.body} */
        /* await axios.put(`http://localhost:3001/api/users/account/${req.session.userLogged.idUser}`,{body},{headers:{'Content-Type': 'multipart/form-data'}}) */
        /* return res.send(req.body); */
    },
    deleteUser: async (req, res) => {    
        await axios({ url :`http://localhost:3001/api/users/delete/${req.session.userLogged.idUser}`, method: 'post', data: req.body});
        return res.redirect (303, 'http://localhost:3000/');
    }
    
}

module.exports = controller;