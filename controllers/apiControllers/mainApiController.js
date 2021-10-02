const { lightFormat } = require('date-fns');
const express = require('express');
const router = express.Router ();
const db = require ('../../database/models');

const controller = {
    listOperations: async (req, res) => {
        const operations = await db.Operation.findAll({
            where: {id_user: req.params.idUser}
        })
        return res.json(operations);
    },
    selectOperation: async (req, res) => {
        const operation = await db.Operation.findOne({
            where: {idOperation: req.params.idOperation}
        })
        return res.json(operation);
    },
    createOperations: async (req, res) => {
        const newOperation = await db.Operation.create({
            detail: req.body.detail,
            ammount: req.body.ammount,
            date: req.body.date,
            type: req.body.type,
            category: req.body.category,
            id_user: req.body.id_user
        });
        return res.json(newOperation);
    },
    updateOperation: async (req, res) => {
        const operation = await db.Operation.update({
            detail: req.body.detail,
            ammount: req.body.ammount,
            date: req.body.date,
            category: req.body.category
            },
            { where: {idOperation: req.params.idOperation}
        });
        return res.json(operation);
    },
    deleteOperation:  async (req, res) => {
        const operation = await db.Operation.destroy({
            where: {idOperation: req.params.idOperation}
        })
        return res.json(operation);
    },
    filterOperations: async (req, res) => {
        let operations
        if (req.params.category == 'All') {
            operations = await db.Operation.findAll({
                where: {id_user: req.params.idUser}
            });    
        } else {
            operations = await db.Operation.findAll({
                where: {
                    category: req.params.category,
                    id_user: req.params.idUser
                }
            })
        }
        return res.json(operations);
    }
}

module.exports = controller;