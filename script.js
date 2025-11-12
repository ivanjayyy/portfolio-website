// nav-menu
const navBtn = document.getElementById('navBtn');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');
const contactPage = document.getElementById('contact');
const upBtn = document.getElementsByClassName('go-up-btn')[0];

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
        upBtn.style.display = 'flex';
        // contactPage.style.zIndex = '-500';
    } else {
        navBtn.style.display = 'none';
        upBtn.style.display = 'none';
        navMenu.classList.remove('active');
        // contactPage.style.zIndex = '-2000';
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
});

// email submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (!form || !status) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        status.innerHTML = ''; // Clear previous messages

        try {
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = '<p style="color: #4ade80; margin-top: 1rem;">Message sent successfully! I’ll get back to you soon.</p>';

                form.reset();

                form.querySelectorAll('input, textarea').forEach(field => {
                    field.value = '';
                });
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message.');
            }

        } catch (error) {
            status.innerHTML = `<p style="color: #f87171; margin-top: 1rem;">${error.message || 'Something went wrong. Please try again.'}</p>`;

        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});

// loading screen
// const loadingScreen = document.getElementById('pre-loader');
//
// window.addEventListener('load', function () {
//     loadingScreen.style.display = 'none';
// })

// animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-up, .hidden-left, .hidden-right, .hidden-down');
hiddenElements.forEach((element) => observer.observe(element));