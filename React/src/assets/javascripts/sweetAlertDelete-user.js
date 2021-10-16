
let deleteUser = document.querySelector('#delete-user');

  deleteUser.addEventListener('click', (e)=>{
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
      'Your account has been deleted.',
      'success'
      )
    }
    })
    let confirmButton = document.querySelector('.swal2-styled.swal2-confirm');
    let cancelButton = document.querySelector('.swal2-styled.swal2-cancel');
    confirmButton.addEventListener('click', ()=>{
      console.log('primera confirmacion');
      let confirmButton2 = document.querySelector('.swal2-styled.swal2-confirm');
      confirmButton2.addEventListener('click', ()=>{
        console.log('segunda confirmacion');
      })
      setTimeout(function(){
        window.location.href = 'http://localhost:3000/users/delete/'
      }, 1200);
    })
    cancelButton.addEventListener('click', ()=>{
      e.preventDefault();
    })
  })
