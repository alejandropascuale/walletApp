const express = require('express');
const router = express.Router ();
const db = require ('../../database/models');

const controller = {
    listOperations: async (req, res) => {
        const operations = await db.Operation.findAll({})
        return res.json(operations);
    },
    selectOperation: async (req, res) => {
        const operation = await db.Operation.findOne({
            where: {idOperation: req.params.idOperation}
        })
        return res.json(operation);
    },
    lastOperations: async (req, res) => {
        const operations = await db.Operation.findAll({
            where: {id_user: req.params.idUser},
            limit: 10,
            order: [['idOperation', 'DESC']]
        })
        return res.json(operations);
    },
    createOperations: async (req, res) => {
        const newOperation = await db.Operation.create({
            detail: req.body.detail,
            ammount: req.body.ammount,
            date: req.body.date,
            type: req.body.type,
            category: req.body.category,
            id_user: req.session.userLogged.idUser
        }) 
        return res.json(newOperation);
    },
    editOperationForm: async (req, res) => {
        const operation = await db.Operation.findOne({
            where:{ idOperation: req.params.idOperation }
        })
        return res.render ('operation-edit', {user, operation})
    },
    updateOperation: async (req, res) => {
        const operation = await db.Operation.update({
            detail: req.body.detail,
            ammount: req.body.ammount,
            date: req.body.date,
            type: req.body.type,
            category: req.body.category
            },
            { where: {idOperation: req.params.idOperation}
        })
        return res.json(operation);
    },
    deleteOperation:  async (req, res) => {
        const operation = await db.Operation.destroy({
            where: {idOperation: req.params.idOperation}
        })
        return res.json(operation);
    }
}

module.exports = controller;