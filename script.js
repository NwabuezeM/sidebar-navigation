const hamburger = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-main');
const container = document.querySelector('.container');
const removeSidebar = document.querySelector('.fa-times');

const toggleSidebar = () => {
    sidebar.classList.toggle('show-sidebar');
    if (!sidebar.classList.contains('show-sidebar')) {
        removeMargin();
    } else {
        hamburger.style.marginLeft = '180px';
        container.style.marginLeft = '185px';
    }
};

hamburger.addEventListener('click', () => {
    toggleSidebar();
});

removeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
    removeMargin();
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
        removeMargin();
    }
};

const removeMargin = () => {
    hamburger.style.marginLeft = '0';
    container.style.marginLeft = '0';
}

mediaQuery.addEventListener('change', handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
