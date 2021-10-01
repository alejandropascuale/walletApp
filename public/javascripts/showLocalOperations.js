let tbody = document.querySelector('#insert-data');

if(localStorage.getItem('operationsUser')) {
  let operations = JSON.parse(localStorage.getItem('operationsUser'));
  let length = operations.length > 10? 10: operations.length;
  
  for (var i = 0; i < length; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < 1; j++) {
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let textoCelda1 = document.createTextNode(operations[i].detail);
      let textoCelda2 = document.createTextNode(operations[i].ammount);
      let textoCelda3 = document.createTextNode(operations[i].date);
    
      td1.appendChild(textoCelda1);
      td2.appendChild(textoCelda2);
      td3.appendChild(textoCelda3);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      
    }
    tbody.appendChild(tr);

    
  }
  let balanceValue = document.querySelector('.wallet-balance');
  let incomes =  operations.filter(q => q.type == 'Income');
  let expenses =  operations.filter(e => e.type == 'Expense');
  const totalIncomes = incomes.reduce((sum, t) => {return sum + t.ammount}, 0);
  console.log(totalIncomes);
  const totalExpenses = expenses.reduce((sum, t) => {return sum + t.ammount}, 0);
  const balance = (totalIncomes - totalExpenses).toFixed(2);
  localStorage.setItem('balance', balance);
  balanceValue.innerHTML = '$' + (localStorage.getItem('balance'));
} else {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let textoCelda1 = document.createTextNode('you have no registered operations');
  tr.appendChild(td1);
  td1.appendChild(textoCelda1);
  tbody.appendChild(tr);
}