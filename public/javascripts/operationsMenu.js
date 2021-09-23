window.addEventListener('load', ()=> {
    let addButton = document.querySelector('#add-operations-button');
    let operationsAddForm = document.querySelector('#add-operations-form')
    let cancelButton = document.querySelector('#cancel-button')


    addButton.addEventListener('click', ()=> {
        operationsAddForm.style.left = '0';
    })
    cancelButton.addEventListener('click', ()=>{
        operationsAddForm.style.left = '-30%';
    })

})