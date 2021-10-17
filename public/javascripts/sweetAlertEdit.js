let btnCheck = document.querySelector('.btn-check');
let editForm = document.querySelector('#edit-operations-form');

btnCheck.addEventListener('click', (e) => {
  e.preventDefault();
  
  Swal.fire({
  icon: 'success',
  title: 'Operation edited successfully',
  showConfirmButton: false,
  timer: 1200
  })
  setTimeout(function(){
      editForm.submit();
  }, 1200);
})