
let iconsTrash = document.querySelectorAll('.fa-trash');

for(let i = 0; i< iconsTrash.length; i++){
    iconsTrash[i].addEventListener('click', (e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5060ee',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your operation has been deleted.',
            'success'
            )
        }
        })
        let confirmButton = document.querySelector('.swal2-styled.swal2-confirm');
        let cancelButton = document.querySelector('.swal2-styled.swal2-cancel');
        confirmButton.addEventListener('click', ()=>{
            let operationToDelete = ((e.target).parentNode).parentNode.id;
            let operations = JSON.parse(localStorage.getItem('operationsUser'));
            let newOperations = operations.filter(p => p.id != operationToDelete);
            localStorage.setItem('operationsUser', JSON.stringify(newOperations));
            let confirmButton2 = document.querySelector('.swal2-styled.swal2-confirm');
            confirmButton2.addEventListener('click', ()=>{
                location.reload();
            })
        })
        cancelButton.addEventListener('click', ()=>{
            e.preventDefault();
        })
    })
}
