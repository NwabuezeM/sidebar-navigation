const hamburger = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-main');
const container = document.querySelector('.container');
const removeSidebar = document.querySelector('.fa-times');

const toggleSidebar = () => {
    sidebar.classList.add('show-sidebar');
};

hamburger.addEventListener('click', () => {
    toggleSidebar();
});

removeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && hamburger !== event.target) {
        toggleSidebar();
    }
});

const mediaQuery = window.matchMedia('(min-width: 769px)');

const handleMediaQueryChange = (event) => {
    if (event.matches) {
        sidebar.classList.remove('show-sidebar');
    }
};

mediaQuery.addEventListener('change', handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
