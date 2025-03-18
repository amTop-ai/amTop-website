const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const visibleCards = 3; // Number of cards visible
const cardWidth = 300; // Adjust width (includes padding/margin)

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Move next
nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

// Move previous
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Set initial position
updateCarousel();
