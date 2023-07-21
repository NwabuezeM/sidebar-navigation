const hamburger = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.nav-main');
const container = document.querySelector('.container');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
    if (!sidebar.classList.contains('show-sidebar')) {
        hamburger.style.marginLeft = '0';
        container.style.marginLeft = '0';
    } else {
        hamburger.style.marginLeft = '200px';
        container.style.marginLeft = '220px';
    }
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && hamburger !== event.target) {
        sidebar.classList.remove('show-sidebar');
        hamburger.style.marginLeft = '0';
        container.style.marginLeft = '0';
    }
});
