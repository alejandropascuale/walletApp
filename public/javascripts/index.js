let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('#search-form');
let searchIcon = document.querySelector('#search-icon');
let closeIcon = document.querySelector('#close');
let searchBox = document.querySelector('#search-box');

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
  searchBox.focus();
};
closeIcon.onclick = () => {
  searchForm.classList.remove('active');
};

if(window.location.href != 'http://localhost:3000/'){
  let footer = document.querySelector('footer');
  footer.style.position = 'fixed';
  footer.style.bottom = '0';
}