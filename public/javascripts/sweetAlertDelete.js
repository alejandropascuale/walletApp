
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
      console.log('primera confirmacion');
      let deleteForm = (iconsTrash[i].parentNode).parentNode;
      setTimeout(function(){
        deleteForm.submit();
      }, 1200);
      let confirmButton2 = document.querySelector('.swal2-styled.swal2-confirm');
      confirmButton2.addEventListener('click', ()=>{
        console.log('segunda confirmacion');
      })
    })
    cancelButton.addEventListener('click', ()=>{
      e.preventDefault();
    })
  })
}