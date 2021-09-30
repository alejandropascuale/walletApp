/* Operations without login */

let addOperationsForm = document.querySelector('#add-operations-form');
let addOperationsButton = document.querySelector('#add-operation-button');

let detail = document.querySelector('#detail');
let ammount = document.querySelector('#ammount');
let date = document.querySelector('#date');
let type = document.querySelector('#type');
let category = document.querySelector('#category');

addOperationsButton.addEventListener('click', (e)=>{
  e.preventDefault();
  let operations = [];
  let lastId = 0;

  if(localStorage.getItem('operationsUser')) {
    operations = JSON.parse(localStorage.getItem('operationsUser'));
    lastId = operations.length;
  } else {
    operations = [];
    lastId = 0;
  }

  let t = addOperationsForm.elements;
  let operation = {};
  operation.id = lastId + 1;
  operation.detail = t[0].value;
  operation.ammount = t[1].value;
  operation.date = t[2].value;
  operation.type = t[3].value;
  operation.category = t[4].value;
  
  operations.push(operation);
  localStorage.setItem('operationsUser', JSON.stringify(operations));
  addOperationsForm.reset();
  location.reload()

})