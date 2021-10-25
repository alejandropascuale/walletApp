import React, { useState, useEffect, useContext} from 'react';
import { UserContext } from '../App';


function BalanceSection() {
  const [balance, setBalance] = useState([]);
  const {userLogin} = useContext(UserContext);
  useEffect(()=>{
    let balanceStatus = 0;
    if(userLogin && typeof userLogin != 'undefined'){
      fetch(`http://localhost:3001/api/operations/user/${userLogin.idUser}`)
        .then(response => response.json())
        .then(op => {
          let incomes =  op.filter(i => i.type === 'Income');
          let expenses =  op.filter(i => i.type === 'Expense');
          let totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
          let totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
          balanceStatus = (totalIncomes - totalExpenses).toFixed(2);
          setBalance(balanceStatus);
        })
    } else if (localStorage.getItem('operationsUser')){
      let op = JSON.parse(localStorage.getItem('operationsUser'));
      let incomes =  op.filter(i => i.type === 'Income');
      let expenses =  op.filter(i => i.type === 'Expense');
      let totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
      let totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
      balanceStatus = (totalIncomes - totalExpenses).toFixed(2);
      setBalance(balanceStatus);
    } else {
      setBalance(balanceStatus);
    }
    }, [])
    if(balance !== 0){
      return (
          <section className="balance" id="balance">
            <h3 className="sub-heading">See yours incomes and expenses</h3>
            <h1 className="heading">Your Balance</h1>
            <h1 className="wallet-balance">${balance}</h1>
          </section>
      )
    } else {
      return (
          <section className="balance" id="balance">
            <h3 className="sub-heading">See yours incomes and expenses</h3>
            <h1 className="heading">Your Balance</h1>
            <h1 className="wallet-balance">$0,00</h1>
          </section>
      )
    }
}

export default BalanceSection;