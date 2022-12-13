// Navbar was inspired by this tutorial video: https://www.youtube.com/watch?v=neb7WcDixoY&t=4s
const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})