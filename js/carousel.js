document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemWidth = 100; // Percentage width of each item (100% for full width)
    let currentIndex = 0; // Start at the first item

    function updateCarousel() {
        carouselWrapper.style.transform = `translateX(${-itemWidth * currentIndex}%)`;
    }

    function goToNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    // Automatic scrolling interval
    const autoScrollInterval = 3000; // Time in milliseconds (e.g., 3000ms = 3 seconds)
    setInterval(goToNextItem, autoScrollInterval);

    updateCarousel(); // Initialize the carousel
});
