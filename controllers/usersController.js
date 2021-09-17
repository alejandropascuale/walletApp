const express = require('express');
const router = express.Router ();

const controller = {
    registerForm: (req, res) => {
        return res.render ('register-form');
    }
}

module.exports = controller;