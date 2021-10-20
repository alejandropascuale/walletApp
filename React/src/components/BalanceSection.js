import React, { useState, useEffect} from 'react';


function BalanceSection() {
  const [balance, setBalance] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(data => {
        function getCookie(cname) {
          let name = cname + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let ca = decodedCookie.split(';');
          for(let i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) === ' ') {
              c = c.substring(1);
              }
              if (c.indexOf(name) === 0) {
              return c.substring(name.length, c.length);
              }
          }
          return "";
        }
        let emailCookie = getCookie('userEmail');
        let balanceStatus = 0;
        if(emailCookie){
          const user = data.find(u => u.email === emailCookie);
          fetch(`http://localhost:3001/api/operations/user/${user.idUser}`)
              .then(response => response.json())
              .then(op => {
                let incomes =  op.filter(i => i.type === 'Income');
                let expenses =  op.filter(i => i.type === 'Expense');
                let totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
                let totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
                balanceStatus = (totalIncomes - totalExpenses).toFixed(2);
                setBalance(balanceStatus);
              })
        } else {
            setBalance(balanceStatus);
          }
    })
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