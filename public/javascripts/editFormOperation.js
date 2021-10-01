
let detail = document.querySelector('#detail');
let ammount = document.querySelector('#ammount');
let date = document.querySelector('#date');
let type = document.querySelector('#type');
let category = document.querySelector('#category');

let title = document.querySelector('title');

let operationId = localStorage.getItem('operationToEdit');
let operations = JSON.parse(localStorage.getItem('operationsUser'));

let operationToEdit = operations.filter(o => o.id == operationId);

title.innerText = `Edit operation #${operationToEdit[0].id}`
detail.value = (operationToEdit[0].detail);
ammount.value = (operationToEdit[0].ammount);
date.value = operationToEdit[0].date;
type.value = (operationToEdit[0].type);
category.value = (operationToEdit[0].category);

let btnCheck = document.querySelector('.btn-check');

btnCheck.addEventListener('click', () => {
    operations[operations.indexOf(operationToEdit[0])].detail = detail.value;
    operations[operations.indexOf(operationToEdit[0])].ammount = Number(ammount.value);
    operations[operations.indexOf(operationToEdit[0])].date = date.value;
    operations[operations.indexOf(operationToEdit[0])].category = category.value;

    localStorage.setItem('operationsUser', JSON.stringify(operations));
})