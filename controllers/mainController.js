const express = require('express');
const router = express.Router ();
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
            const balance = (totalIncomes - totalExpenses).toFixed(2);
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
            let balance = (totalIncomes - totalExpenses).toFixed(2);
            return res.render ('operations', {user, operations, balance, moment});
        } else {
            return res.render ('operations');
        }
    },
    createOperations: async (req, res) => {
        await axios({ url :'http://localhost:3000/api/operations', method: 'post', data: req.body})
        return res.redirect('/operations');
    },
    editOperationForm: async (req, res) => {
        const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;
        const operation = (await axios.get(`http://localhost:3000/api/operations/${req.params.idOperation}`)).data;
        return res.render ('operation-edit', {user, operation, moment})
    },
    editLocalOperationForm: async (req, res) => {
        return res.render ('operation-edit')
    },
    updateOperation: async (req, res) => {
        await axios({ url :`http://localhost:3000/api/operations/${req.params.idOperation}/edit`, method: 'put', data: req.body })
        return res.redirect('/operations');
    },
    deleteOperation:  async (req, res) => {
        await axios.delete(`http://localhost:3000/api/operations/${req.params.idOperation}/delete`);
        return res.redirect('/operations');
    },
    filterOperations:  async (req, res) => {
        const user = (await axios.get(`http://localhost:3000/api/users/${req.session.userLogged.idUser}`)).data;
        const operations = (await axios.get(`http://localhost:3000/api/operations/search/${req.params.category}`)).data;
        let operation = (await axios.get('http://localhost:3000/api/operations')).data;
        
        let incomes =  operation.filter(i => i.type == 'Income');
        let expenses =  operation.filter(i => i.type == 'Expense');
        const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
        const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
        let balance = (totalIncomes - totalExpenses).toFixed(2);
        
        return res.render ('operations', {user, operation, balance, operations, moment})
    }
}

module.exports = controller;