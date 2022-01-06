//select DOM items

const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

//Set Initial State of the Menu

let showMenu = false;

menuBTN.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBTN.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;

    } else {
        menuBTN.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        //set menu state
        showMenu = false;

    }
}
