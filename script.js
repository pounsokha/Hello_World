// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// AOS initialization
AOS.init();

// Filter ports
const filterInput = document.getElementById('portFilter');
const portItems = document.querySelectorAll('.port-item');

filterInput.addEventListener('keyup', () => {
    const filterValue = filterInput.value.toLowerCase();
    portItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(filterValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
