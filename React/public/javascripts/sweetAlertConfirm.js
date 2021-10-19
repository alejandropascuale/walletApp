let confirmButton = document.querySelector('body form .btn-check');
let addForm = document.querySelector('#add-operations-form');

confirmButton.addEventListener('click', (e)=>{
  e.preventDefault();
  Swal.fire({
  icon: 'success',
  title: 'Operation added successfully',
  showConfirmButton: false,
  timer: 1500
  })
  setTimeout(function(){
    addForm.submit();
  }, 1500);
})