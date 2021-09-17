let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
let closeIcon = document.querySelector('#close');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

menu.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

searchIcon.onclick = () => {
  searchForm.classList.toggle('active');
};
closeIcon.onclick = () => {
  searchForm.classList.remove('active');
};

