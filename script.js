// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Animation duration
    once: true, // Whether animation should happen only once
});

// Filter ports by name
document.getElementById('portFilter').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const portItems = document.querySelectorAll('.port-item');

    portItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
