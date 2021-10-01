
let iconsTrash = document.querySelectorAll('.fa-trash');

for(let i = 0; i< iconsTrash.length; i++){
    iconsTrash[i].addEventListener('click', (e)=>{
        e.preventDefault();
        let operationToDelete = ((e.target).parentNode).parentNode.id;
        let operations = JSON.parse(localStorage.getItem('operationsUser'));
        let newOperations = operations.filter(p => p.id != operationToDelete);
        localStorage.setItem('operationsUser', JSON.stringify(newOperations));
        location.reload();
    })
}
