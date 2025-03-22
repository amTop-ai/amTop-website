document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cards").forEach(card => {
        card.style.display = "none"; // Hide all cards on page load
    });
});

let activeCategory = null;

document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("mouseenter", function () {
        let category = this.getAttribute("data-category");
        if (category) {
            showCards(category);
        }
    });

    // Prevent the cards from disappearing when clicking on their respective navbar items
    item.addEventListener("click", function (event) {
        event.stopPropagation(); // Stops the click from triggering document-level click event
    });
});

document.querySelectorAll(".cards").forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.style.display = "flex";
    });
    card.addEventListener("mouseleave", function () {
        if (!activeCategory) {
            this.style.display = "none";
        }
    });

    // Prevent card from hiding when clicking inside it
    card.addEventListener("click", function (event) {
        event.stopPropagation(); // Stops the click from hiding the cards
    });
});

// Show the corresponding cards
function showCards(category) {
    document.querySelectorAll(".cards").forEach(card => {
        card.style.display = "none";
    });
    let selectedCard = document.getElementById(category);
    selectedCard.style.display = "flex";
    activeCategory = category;
}

// Hide cards function
function hideCards() {
    document.querySelectorAll(".cards").forEach(card => {
        card.style.display = "none";
    });
    activeCategory = null;
}

// Hide when clicking outside navbar or cards
document.addEventListener("click", function (event) {
    let isNavbarItem = event.target.closest(".nav-item");
    let isCards = event.target.closest(".cards");

    if (!isNavbarItem && !isCards) {
        hideCards();
    }
});
