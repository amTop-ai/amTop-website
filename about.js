document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".navcards").forEach((card) => {
    card.style.display = "none"; // Hide all cards on page load
  });
});

let activeCategory = null;

document.querySelectorAll(".nav-item").forEach((item) => {
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

document.querySelectorAll(".navcards").forEach((card) => {
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
  document.querySelectorAll(".navcards").forEach((card) => {
    card.style.display = "none";
  });
  let selectedCard = document.getElementById(category);
  selectedCard.style.display = "flex";
  activeCategory = category;
}

// Hide cards function
function hideCards() {
  document.querySelectorAll(".navcards").forEach((card) => {
    card.style.display = "none";
  });
  activeCategory = null;
}

// Hide when clicking outside navbar or cards
document.addEventListener("click", function (event) {
  let isNavbarItem = event.target.closest(".nav-item");
  let isCards = event.target.closest(".navcards");

  if (!isNavbarItem && !isCards) {
    hideCards();
  }
});

// js code for about hero section card move

const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".moving-card"); // Fixed selector
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const visibleCards = 3; // Number of visible cards
const cardWidth = cards[0].offsetWidth + 20; // Adjust width including margin (if any)
const totalCards = cards.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Disable buttons if at the start or end
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalCards - visibleCards;
}

// Move next
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
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

// Set initial state
updateCarousel();

// team member animation js code

const teamMembers = [
  {
    name: "Amarnath Pandey",
    image: "images/Amarnath.png",
    description:
      "Amarnath Pandey is a marketer and AI researcher who has served as the CEO of amTop since 2022. During his tenure, he has managed over 25 high-profile marketing projects, contributing to a 75% increase in lead generation and 15X revenue boost in many of these initiatives.\n\nHis skills lie in AI, copywriting, advertisements, gamification, and philosophy.\n\nHis aim is to build one of the world's largest technology companies, dedicated to supporting the continuous evolution of humanity.",
  },
  {
    name: "Anant Dubey",
    image: "images/Anant.png",
    description:
      "As the COO of amTop, Anant Dubey brings extensive expertise in DevOps, web development, and AI engineering. His strategic vision has led to the successful implementation of over 30 automation projects, resulting in a 60% reduction in operational costs and a 40% improvement in team productivity across various business units.\n\nHe specializes in creating seamless technological integrations that enhance business efficiency.\n\nHis mission is to democratize access to advanced technology solutions, making them accessible to businesses of all sizes.",
  },
  {
    name: "Gaurav Upadhyay",
    image: "images/Gaurav.png",
    description:
      "Gaurav Upadhyay, as the Chief Scientist at amTop, leads groundbreaking developments in AI-driven marketing intelligence. His innovative approach has revolutionized how brands engage with their audiences, implementing advanced machine learning solutions that have achieved an average of 85% accuracy in market trend predictions and a 200% improvement in campaign targeting efficiency.\n\nHe excels in machine learning, natural language processing, and predictive analytics.\n\nHis vision is to transform marketing through ethical AI, ensuring sustainable and impactful business growth.",
  },
];
let currentIndexTeam = 0;
const teamContent = document.querySelector(".team-content p");
const teamImage = document.querySelector(".team-image img");
function updateTeamSection() {
  teamContent.classList.remove("active");
  teamImage.classList.remove("active");
  setTimeout(() => {
    teamContent.innerHTML = teamMembers[currentIndexTeam].description;
    teamImage.src = teamMembers[currentIndexTeam].image;
    teamContent.classList.add("active");
    teamImage.classList.add("active");
    currentIndexTeam = (currentIndexTeam + 1) % teamMembers.length; // Loop back to the first
  }, 500); // Small delay for smooth transition
}
// Run animation every 5 seconds
setInterval(updateTeamSection, 5000);
// Initial setup
document.addEventListener("DOMContentLoaded", () => {
  updateTeamSection(); // Start with first team member
});
