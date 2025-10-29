// nav-menu
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');
const contactPage = document.getElementById('contact');

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
        contactPage.style.zIndex = '-500';
    } else {
        navBtn.style.display = 'none';
        navMenu.classList.remove('active');
        contactPage.style.zIndex = '-2000';
    }
});

// assignment-page
let cards = document.querySelectorAll(".assignments .card");

function rotateCards() {
    let angle = 0;

    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;

        } else {
            card.style.transform = `rotate(${angle}deg)`;
            angle = angle - 10;
            card.style.zIndex = cards.length - index + "";
        }
    })
}

let stackArea = document.querySelector(".assignments");

window.addEventListener("scroll", () => {
    let distance = window.innerHeight/2;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = -1 * (topVal/distance + 1);
    index = Math.floor(index);

    for (i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add("away");
        } else {
            cards[i].classList.remove("away");
        }
    }

    rotateCards();
})