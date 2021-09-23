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
            const lastOperations = await db.Operation.findAll({
                where: {
                    id_user: req.session.userLogged.idUser
                },
                limit: 10
            }) 
            return res.render ('operations', {user, lastOperations});
        } else {
            return res.render ('operations');
        }
    },
    createOperations: async (req, res) => {
        await db.Operation.create({
        detail: req.body.detail,
        ammount: req.body.ammount,
        date: req.body.date,
        type: req.body.type,
        category: req.body.category,
        id_user: req.session.userLogged.idUser
        }) 
        return res.redirect('/operations');
    },
    editOperationForm: async (req, res) => {
        const user = await db.User.findOne({
            where: {email: req.session.userLogged.email}
        }) 
        const operation = await db.Operation.findOne({
            where:{ idOperation: req.params.idOperation }
        })
        return res.render ('operation-edit', {user, operation})
    },
    updateOperation: async (req, res) => {
        await db.Operation.update({
            detail: req.body.detail,
            ammount: req.body.ammount,
            date: req.body.date,
            type: req.body.type,
            category: req.body.category
            },
            { where: {idOperation: req.params.idOperation}
        })
        return res.redirect('/operations');
    }
}

module.exports = controller;