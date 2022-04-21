const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')


document.querySelector('.openMenu').addEventListener('click', show);
document.querySelector('.closeMenu').addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
    document.querySelector('.clickli').addEventListener('click', close);
}
function close(){
    mainMenu.style.display = "none";
    openMenu.style.display = "flex";
}
