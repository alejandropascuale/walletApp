console.log('conected');
let addButton = document.querySelector('#add-operations-button');
console.log(addButton);
let operationsAddForm = document.querySelector('#add-operations-form');
let cancelButton = document.querySelector('#cancel-button');
let detailInput = document.querySelector('#detail');

addButton.addEventListener('click', ()=> {
    operationsAddForm.style.left = '0';
    detailInput.focus();
})
cancelButton.addEventListener('click', ()=>{
    operationsAddForm.style.left = '-110%';
})