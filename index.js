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

// Team Animation Section 

const teamMembers = [
    {
      name: "Amarnath Pandey",
      image: "images/Amarnath.png",
      description:
        "Amarnath Pandey - I'm an AI researcher and web developer passionate about combining technology, philosophy, and human behavior to drive meaningful innovation. My work centers around artificial intelligence, robotics, and neuroscience, specifically focusing on cognitive enhancement, attention mechanisms, and their real-world applications.",
    },
    {
      name: "Anant Dubey",
      image: "images/Anant.png",
      description:
        "Anant Dubey - As the COO of this startup, I specialize in DevOps, web development, and AI engineering, with a strong focus on automation, business strategy, and marketing. My passion lies in using AI and DevOps to streamline processes, making complex tasks more efficient while ensuring technology serves as an enabler, not a replacement for human capability. I envision a world where access to information is seamless, empowering individuals to make informed decisions without unnecessary barriers.",
    },
    {
      name: "Gaurav Upadhyay",
      image: "images/Gaurav.png",
      description:
        "Gaurav Upadhyay - As the Chief Scientist at amTop, I lead the development of AI-driven marketing intelligence that transforms how brands engage with their audiences. My expertise in machine learning, natural language processing (NLP), and predictive analytics enables amTop to stay ahead of industry trends, providing businesses with data-driven, ethical, and high-impact marketing solutions. By leveraging advanced AI methodologies, I ensure that our platform not only analyzes current market dynamics but also predicts future shifts, empowering brands with actionable insights.",
    },
  ];
  let currentIndex = 0;
  const teamContent = document.querySelector(".team-content p");
  const teamImage = document.querySelector(".team-image img");
  function updateTeamSection() {
    teamContent.classList.remove("active");
    teamImage.classList.remove("active");
    setTimeout(() => {
      teamContent.innerHTML = teamMembers[currentIndex].description;
      teamImage.src = teamMembers[currentIndex].image;
      teamContent.classList.add("active");
      teamImage.classList.add("active");
      currentIndex = (currentIndex + 1) % teamMembers.length; // Loop back to the first
    }, 500); // Small delay for smooth transition
  }
  // Run animation every 5 seconds
  setInterval(updateTeamSection, 5000);
  // Initial setup
  document.addEventListener("DOMContentLoaded", () => {
    updateTeamSection(); // Start with first team member
  });