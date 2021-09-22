const express = require('express');
const router = express.Router ();
const db = require ('../database/models');

const controller = {
    index: async (req, res) => {
        if (req.session.userLogged){
            const user = await db.User.findOne({
                where: {email: req.session.userLogged.email}
            }) 
            return res.render ('index', {user});
        } else {
            return res.render ('index');
        }
    },
    detailOperations: async (req, res) => {
        if (req.session.userLogged){
            const user = await db.User.findOne({
                where: {email: req.session.userLogged.email}
            }) 
            return res.render ('operations', {user});
        } else {
            return res.render ('operations');
        }
    }
}

module.exports = controller;