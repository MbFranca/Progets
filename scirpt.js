const navMenu = document.querySelector('.nav-menu');
const navlist = document.querySelector('.nav-list');

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
    navlist.classList.toggle('ativo');
})