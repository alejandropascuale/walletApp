const express = require('express');
const router = express.Router ();
const db = require ('../database/models');

const controller = {
    index: async (req, res) => {
        const user = await db.User.findOne({
            where: {email: req.session.userLogged.email}
        }) 
        return res.render ('index', {user});
    }
}

module.exports = controller;