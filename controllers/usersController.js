const express = require('express');
const router = express.Router ();

const controller = {
    registerForm: (req, res) => {
        return res.render ('register-form');
    },
    loginForm: (req, res) => {
        return res.render ('login-form');
    }
}

module.exports = controller;