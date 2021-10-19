import React, { useState, useEffect} from 'react';


function BalanceSection() {
  const [balance, setBalance] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/api/operations/user/1')
        .then(response => response.json())
        .then(data => {
          let balanceStatus = 0;
          let incomes =  data.filter(i => i.type === 'Income');
          let expenses =  data.filter(i => i.type === 'Expense');
          let totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
          let totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
          balanceStatus = (totalIncomes - totalExpenses).toFixed(2);
          setBalance(balanceStatus);
        })
    }, [])
    return (
        <section className="balance" id="balance">
          <h3 className="sub-heading">See yours incomes and expenses</h3>
          <h1 className="heading">Your Balance</h1>
          <h1 className="wallet-balance">${balance}</h1>
        </section>
    )
}

export default BalanceSection;