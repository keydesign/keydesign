// Variables
const mainImage = document.querySelector('.carousel-main-image');
const thumbnails = document.querySelectorAll('.carousel-thumbnail');
let currentIndex = 0;
let interval;
// Set initial active thumbnail
thumbnails[0].classList.add('active');
// Thumbnail click event listeners
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateCarousel(index);
    });
});
// Function to update the carousel
function updateCarousel(index) {
    currentIndex = index;
    mainImage.style.opacity = '0';
    mainImage.addEventListener('transitionend', () => {
        mainImage.src = thumbnails[index].querySelector('img').src;
        mainImage.style.opacity = '1';
    }, { once: true });
    removeActiveClass();
    thumbnails[index].classList.add('active');
}
// Function to remove active class from all thumbnails
function removeActiveClass() {
    thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
    });
}
// Autoscroll on page load
interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateCarousel(currentIndex);
}, 5000);
// Stop autoscroll when mouse enters the carousel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(interval);
});
// Resume autoscroll when mouse leaves the carousel
carouselContainer.addEventListener('mouseleave', () => {
    clearInterval(interval);
    currentIndex = Array.from(thumbnails).findIndex((thumbnail) =>
        thumbnail.classList.contains('active')
    );
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateCarousel(currentIndex);
    }, 5000);
});