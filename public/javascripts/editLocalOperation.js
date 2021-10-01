
let iconsEdit = document.querySelectorAll('.fa-edit');

for(let i = 0; i< iconsEdit.length; i++){
    iconsEdit[i].addEventListener('click', (e)=>{
        /* e.preventDefault(); */
        let operationToEdit = ((e.target).parentNode).id;
        localStorage.setItem('operationToEdit', operationToEdit)
        /* let operations = JSON.parse(localStorage.getItem('operationsUser'));
        let newOperations = operations.filter(p => p.id != operationToDelete);
        localStorage.setItem('operationsUser', JSON.stringify(newOperations));
        location.reload() */
    })
}