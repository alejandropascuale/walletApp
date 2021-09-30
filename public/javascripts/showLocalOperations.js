let tbody = document.querySelector('#insert-data');
let tr = document.createElement("tr");

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
}