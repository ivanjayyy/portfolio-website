// nav-menu
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');
// const home = document.getElementsByClassName('home');

navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

navMenu.addEventListener('click', function(e) {
    if (e.target === navMenu) {
        navBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    const target = document.querySelector('.about');
    const scrollY = window.scrollY;
    const elementTop = target.offsetTop;

    if (scrollY >= elementTop) {
        navBtn.style.display = 'block';
    } else {
        navBtn.style.display = 'none';
        navMenu.classList.remove('active');
    }
});