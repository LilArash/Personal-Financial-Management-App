const $ = document;
const menuButton = $.getElementById('menuButton');
const sideBar = $.getElementById('sideBar');
const closeButton = $.getElementById('closeButton');
const darkModeTogg = $.querySelector('.dark-mode-togg');
const darkModePic = $.querySelector('.dark-mode-pic');
//const menuIcon = $.querySelector('img [src*=menuIcon.svg]');

let isActive = false;


menuButton.addEventListener('click', () => {
    sideBar.style.right = '-260px';
    sideBar.style.transition = 'right 0.7s ease-in-out'

});

closeButton.addEventListener('click', () => {
    sideBar.style.right = '-515px';
    sideBar.style.transition = 'right 0.7s ease-in-out'
});

darkModeTogg.addEventListener('click', () => {
   isActive = !isActive;
   if(isActive) {
        darkMode();
   } else {
        lightMode();
   }

});

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') { 
        isActive = !isActive;
        darkMode();
    } else {
        isActive = !isActive;
       lightMode();
    }
});

function darkMode() {
    document.documentElement.classList.add('dark');
    darkModePic.setAttribute('src', './Assets/images/icons/sun.png');
    menuButton.setAttribute('src', './Assets/images/icons/whiteMenuIcon.svg');
    localStorage.setItem('theme', 'dark');
}

function lightMode() {
    document.documentElement.classList.remove('dark');
    darkModePic.setAttribute('src', './Assets/images/icons/moon.png');
    menuButton.setAttribute('src', './Assets/images/icons/menuIcon.svg');
    localStorage.setItem('theme', 'light');
}