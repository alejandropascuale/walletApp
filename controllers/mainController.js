const express = require('express');
const router = express.Router ();
const db = require ('../database/models');
const axios = require('axios');
var moment = require('moment');


const controller = {
    index: async (req, res) => {
        if (req.session.userLogged){
            const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;

            let operations = (await axios.get('http://localhost:3000/api/operations')).data;
            const lastOperations = operations.slice(operations.length-10).reverse();

            let incomes =  operations.filter(i => i.type == 'Income');
            let expenses =  operations.filter(i => i.type == 'Expense');
            const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
            const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
            const balance = totalIncomes - totalExpenses;
            return res.render ('index', {user, lastOperations, balance, moment});
        } else {
            return res.render ('index');
        }
    },
    detailOperations: async (req, res) => {
        if (req.session.userLogged){
            const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;
            
            let operations = (await axios.get('http://localhost:3000/api/operations')).data.reverse();
            /* const lastOperations = (await axios.get(`http://localhost:3000/api/operations/${user.idUser}/last`)).data; */

            let incomes =  operations.filter(i => i.type == 'Income');
            let expenses =  operations.filter(i => i.type == 'Expense');
            const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
            const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
            let balance = totalIncomes - totalExpenses;
            return res.render ('operations', {user, operations, balance, moment});
        } else {
            return res.render ('operations');
        }
    },
    createOperations: async (req, res) => {
        await axios.post(`http://localhost:3000/api/operations/add`);
        return res.redirect('/operations');
    },
    editOperationForm: async (req, res) => {
        const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;
        const operation = (await axios.get(`http://localhost:3000/api/operations/${req.params.idOperation}`)).data;
        return res.render ('operation-edit', {user, operation})
    },
    updateOperation: async (req, res) => {
        const data = await axios.put(`http://localhost:3000/api/operations/${req.params.idOperation}/edit`).data;
        console.log(data);
        return res.redirect('/operations');
    },
    deleteOperation:  async (req, res) => {
        await axios.delete(`http://localhost:3000/api/operations/delete/${req.params.idOperation}`);
        return res.redirect('/operations');
    }
}

module.exports = controller;