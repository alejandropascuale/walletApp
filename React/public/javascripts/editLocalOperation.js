
let iconsEdit = document.querySelectorAll('.fa-edit');

for(let i = 0; i< iconsEdit.length; i++){
    iconsEdit[i].addEventListener('click', (e)=>{
        let operationToEdit = ((e.target).parentNode).id;
        localStorage.setItem('operationToEdit', operationToEdit)
    })
}