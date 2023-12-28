let icon = document.querySelector('.menu-icon')
let menu = document.querySelector('.nav-menu')


icon.addEventListener('click',
function(){
    console.log('Clicou no icone')
    menu.classList.toggle('ativado')
})