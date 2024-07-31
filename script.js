document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Shop Now button clicked!');
    });

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Buy Now button clicked!');
        });
    });
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const productCards = document.querySelectorAll('.product-card');
const cardWidth = productCards[0].offsetWidth;
const margin = 20; // Adjust this if you have margins
const totalWidth = cardWidth + margin; // Card width plus margin