let tbody = document.querySelector('#insert-data');
let tr = document.createElement("tr");

let operations;
if(localStorage.getItem('operationsFilter')){
  operations = JSON.parse(localStorage.getItem('operationsFilter'));

} else if (localStorage.getItem('operationsUser')){
   operations = JSON.parse(localStorage.getItem('operationsUser'));
}
  
let length = operations.length > 10? 10: operations.length;

for (var i = 0; i < length; i++) {
  let tr = document.createElement("tr");
  for (var j = 0; j < 1; j++) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let div = document.createElement("div");
    
    let link = document.createElement("a");
    let form = document.createElement("form");
    let button = document.createElement("button");
    let editIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    div.classList = ('options-container');
    form.method=('post');
    link.id=operations[i].id;
    form.id=operations[i].id;
    button.type = ('submit');
    editIcon.classList = ('fas fa-edit');
    trashIcon.classList = ('fas fa-trash');

    let textoCelda1 = document.createTextNode(operations[i].detail);
    let textoCelda2 = document.createTextNode(operations[i].ammount);
    let textoCelda3 = document.createTextNode(operations[i].date);
    let textoCelda4 = document.createTextNode(operations[i].type);
    let textoCelda5 = document.createTextNode(operations[i].category);
  
    td1.appendChild(textoCelda1);
    td2.appendChild(textoCelda2);
    td3.appendChild(textoCelda3);
    td4.appendChild(textoCelda4);
    td5.appendChild(textoCelda5);
    td6.appendChild(div);
    div.appendChild(link);
    link.appendChild(editIcon);
    div.appendChild(form);
    form.appendChild(button);
    button.appendChild(trashIcon);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    
  }
  tbody.appendChild(tr);
}
  