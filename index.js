// Constants and Cache DOM Elements
const DOM = {
  cards: document.querySelectorAll(".cards"),
  navItems: document.querySelectorAll(".nav-item"),
  teamContent: document.querySelector(".team-content p"),
  teamImage: document.querySelector(".team-image img"),
  backgroundVideos: document.querySelectorAll(".background-video"),
};

// Team Members Data
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

// State Management
const state = {
  activeCategory: null,
  currentTeamIndex: 0,
  teamInterval: null,
};

// Utility Functions
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Card Functions
const showCards = (category) => {
  if (category === state.activeCategory) return;

  DOM.cards.forEach((card) => {
    card.style.display = "none";
  });

  const selectedCard = document.getElementById(category);
  if (selectedCard) {
    selectedCard.style.display = "flex";
    state.activeCategory = category;
  }
};

const hideCards = () => {
  DOM.cards.forEach((card) => {
    card.style.display = "none";
  });
  state.activeCategory = null;
};

// Team Section Functions
const updateTeamSection = () => {
  const { currentTeamIndex } = state;
  const member = teamMembers[currentTeamIndex];

  // Remove active classes
  DOM.teamContent.classList.remove("active");
  DOM.teamImage.classList.remove("active");

  // Update content with animation
  requestAnimationFrame(() => {
    setTimeout(() => {
      DOM.teamContent.innerHTML = member.description;
      DOM.teamImage.src = member.image;
      DOM.teamImage.alt = `${member.name}'s portrait`;

      // Add active classes
      DOM.teamContent.classList.add("active");
      DOM.teamImage.classList.add("active");

      // Update index
      state.currentTeamIndex = (currentTeamIndex + 1) % teamMembers.length;
    }, 300);
  });
};

// Event Handlers
const handleNavItemHover = debounce((e) => {
  const category = e.target.getAttribute("data-category");
  if (category) {
    showCards(category);
  }
}, 100);

const handleNavItemClick = (e) => {
  const category = e.target.getAttribute("data-category");
  if (category) {
    e.preventDefault();
    showCards(category);
  }
};

const handleDocumentClick = (e) => {
  const isNavItem = e.target.closest(".nav-item");
  const isCards = e.target.closest(".cards");

  if (!isNavItem && !isCards) {
    hideCards();
  }
};

// Initialize videos
const initVideos = () => {
  DOM.backgroundVideos.forEach((video) => {
    video.play().catch((error) => {
      console.log("Video autoplay failed:", error);
    });
  });
};

// Initialize
const init = () => {
  // Initialize videos
  initVideos();

  // Hide all cards initially
  hideCards();

  // Setup event listeners
  DOM.navItems.forEach((item) => {
    item.addEventListener("mouseenter", handleNavItemHover);
    item.addEventListener("click", handleNavItemClick);
  });

  DOM.cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.display = "flex";
    });

    card.addEventListener("mouseleave", () => {
      if (!state.activeCategory) {
        card.style.display = "none";
      }
    });

    card.addEventListener("click", (e) => e.stopPropagation());
  });

  document.addEventListener("click", handleDocumentClick);

  // Initialize team section
  updateTeamSection();
  state.teamInterval = setInterval(updateTeamSection, 5000);

  // Cleanup on page unload
  window.addEventListener("unload", () => {
    if (state.teamInterval) {
      clearInterval(state.teamInterval);
    }
  });
};

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
