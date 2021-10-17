import React, { useState, useEffect} from 'react';


function BalanceSection() {
  const [balance, setBalance] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/api/operations/user/1')
        .then(response => response.json())
        .then(data => {
          let balance = 0;
          let incomes =  data.filter(i => i.type == 'Income');
          let expenses =  data.filter(i => i.type == 'Expense');
          let totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
          let totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
          balance = (totalIncomes - totalExpenses).toFixed(2);
          setBalance(balance)
        })
    }, [])
    return (
        <section class="balance" id="balance">
          <h3 class="sub-heading">See yours incomes and expenses</h3>
          <h1 class="heading">Your Balance</h1>
          <h1 class="wallet-balance">${balance}</h1>
        </section>
    )
}

export default BalanceSection;