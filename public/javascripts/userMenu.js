window.addEventListener('load', ()=> {
    let avatarUser = document.querySelector('.icon-user');
    let userMenu = document.querySelector('.user-menu');

    avatarUser.addEventListener ('mouseover', () => {
    userMenu.style.display = 'block';
    })
    userMenu.addEventListener ('mouseleave', () => {
    userMenu.style.display = 'none';
    })
})