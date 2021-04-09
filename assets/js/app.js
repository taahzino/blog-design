/**
 * Project: Blog Project
 * Author: Tahsin Ahmed Tushar
 * Date: 9 April, 2021
 * Github: https://github.com/tushariar/blog-design
 */

const toggleItems = document.querySelectorAll('.toggleItem');
toggleItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = item.closest('li').querySelector('.toggleMenu');;
        dropdownMenu.classList.toggle('active');
    });
});


const colHeaders = document.querySelectorAll('.col-header');
colHeaders.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const itemName = item.innerText;
        colHeaders.forEach(i => {
            const iName = i.innerText;
            if (iName !== itemName) {
                const dropdownMenu = i.closest('.col').querySelector('.megaMenuLinks');;
                dropdownMenu.classList.remove('active');
            }
        });
        const dropdownMenu = item.closest('.col').querySelector('.megaMenuLinks');;
        dropdownMenu.classList.toggle('active');
    });
});


/**
 * Toggle NavBar 
 */
const showMenuBtn = document.querySelector('.showMenu');
const hideMenuBtn = document.querySelector('.hideMenu');
const navBar = document.querySelector('nav .navLinks');

showMenuBtn.addEventListener('click', () => {
    navBar.classList.add('active');
    showMenuBtn.classList.remove('hide');
    hideMenuBtn.classList.remove('hide');
    showMenuBtn.classList.add('show');
    hideMenuBtn.classList.add('show');;
});

hideMenuBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
    showMenuBtn.classList.remove('show');
    hideMenuBtn.classList.remove('show');
    showMenuBtn.classList.add('hide');
    hideMenuBtn.classList.add('hide');
});