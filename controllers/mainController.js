const express = require('express');
const router = express.Router ();

const controller = {
    index: (req, res) => {
        return res.render ('index');
    }
}

module.exports = controller;