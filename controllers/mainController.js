const express = require('express');
const router = express.Router ();
const db = require ('../database/models');
const axios = require('axios');
var moment = require('moment');


const controller = {
    index: async (req, res) => {
        if (req.session.userLogged){
            const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;

            const operations = (await axios.get('http://localhost:3000/api/operations')).data;
            const lastOperations = (await axios.get(`http://localhost:3000/api/operations/${user.idUser}/last`)).data;

            let incomes =  operations.filter(i => i.type == 'Income');
            let expenses =  operations.filter(i => i.type == 'Expense');
            const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
            const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
            let balance = totalIncomes - totalExpenses;
            return res.render ('index', {user, lastOperations, balance, moment});
        } else {
            return res.render ('index');
        }
    },
    detailOperations: async (req, res) => {
        if (req.session.userLogged){
            const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;
            
            const operations = (await axios.get('http://localhost:3000/api/operations')).data;
            const lastOperations = (await axios.get(`http://localhost:3000/api/operations/${user.idUser}/last`)).data;

            let incomes =  operations.filter(i => i.type == 'Income');
            let expenses =  operations.filter(i => i.type == 'Expense');
            const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
            const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
            let balance = totalIncomes - totalExpenses;
            return res.render ('operations', {user, lastOperations, balance, moment});
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
    },
    deleteOperation:  async (req, res) => {
        await db.Operation.destroy({
            where: {idOperation: req.params.idOperation}
        })
        return res.redirect('/operations');
    }
}

module.exports = controller;