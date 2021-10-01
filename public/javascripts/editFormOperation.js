let detail = document.querySelector('#detail');
let ammount = document.querySelector('#ammount');
let date = document.querySelector('#date');
let type = document.querySelector('#type');
let category = document.querySelector('#category');

let operationId = localStorage.getItem('operationToEdit');
let operations = JSON.parse(localStorage.getItem('operationsUser'));

let operationToEdit = operations.filter(o => o.id == operationId);

detail.value = (operationToEdit[0].detail);
ammount.value = (operationToEdit[0].ammount);
date.value = (operationToEdit[0].date);
type.value = (operationToEdit[0].type);
category.value = (operationToEdit[0].category);