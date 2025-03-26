document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".cards").forEach((card) => {
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

document.querySelectorAll(".cards").forEach((card) => {
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
  document.querySelectorAll(".cards").forEach((card) => {
    card.style.display = "none";
  });
  let selectedCard = document.getElementById(category);
  selectedCard.style.display = "flex";
  activeCategory = category;
}

// Hide cards function
function hideCards() {
  document.querySelectorAll(".cards").forEach((card) => {
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
      "Amarnath Pandey is a marketer and AI researcher who has served as the CEO of amTop since 2022.During his tenure, he has managed over 25 high-profile marketing projects, contributing to a 75% increase in lead generation and 15X revenue boost in many of these initiatives.<br><br>His skills lie in AI, copywriting, advertisements, gamification, and philosophy.<br><br>His aim is to build one of the world's largest technology companies, dedicated to supporting the continuous evolution of humanity.",
  },
  {
    name: "Anant Dubey",
    image: "images/Anant.png",
    description:
      "Anant Dubey is a marketer and AI researcher who has served as the CEO of amTop since 2022.During his tenure, he has managed over 25 high-profile marketing projects, contributing to a 75% increase in lead generation and 15X revenue boost in many of these initiatives.<br><br>His skills lie in AI, copywriting, advertisements, gamification, and philosophy.<br><br>His aim is to build one of the world's largest technology companies, dedicated to supporting the continuous evolution of humanity.",
  },
  {
    name: "Gaurav Upadhyay",
    image: "images/Gaurav.png",
    description:
      "Gaurav Upadhyay is a marketer and AI researcher who has served as the CEO of amTop since 2022.During his tenure, he has managed over 25 high-profile marketing projects, contributing to a 75% increase in lead generation and 15X revenue boost in many of these initiatives.<br><br>His skills lie in AI, copywriting, advertisements, gamification, and philosophy.<br><br>His aim is to build one of the world's largest technology companies, dedicated to supporting the continuous evolution of humanity.",
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

//   Social Media Marketing js code

document.addEventListener("DOMContentLoaded", function () {
  const adCards = document.querySelectorAll(".ad-card");
  const rightPanel = document.querySelector(".right-panel");

  // Default content (Social Media Marketing)
  const defaultContent = {
    title: "Social Media Marketing",
    description: `Le Lorem Ipsum est simplement du faux texte employé dans la 
        composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard 
        de l'imprimerie depuis les années 1500... Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
  };

  const contentData = [
    {
      title: "Social Media Marketing",
      description: `Le Lorem Ipsum est simplement du faux texte employé dans la 
            composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard 
            de l'imprimerie depuis les années 1500... Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
      title: "Google Ads",
      description: `Google Ads is a powerful platform that helps businesses reach their target 
            audience through search and display advertising. It provides various tools to optimize ad 
            campaigns for better conversion rates.`,
    },
    {
      title: "LinkedIn Ads",
      description: `LinkedIn Ads allow professionals and businesses to connect with a 
            highly targeted audience. It offers campaign objectives, audience segmentation, and analytics to 
            maximize ad performance.`,
    },
    {
      title: "SEO",
      description: `SEO (Search Engine Optimization) enhances website visibility on search 
            engines like Google. It involves optimizing content, keywords, and backlinks to improve 
            organic search rankings.`,
    },
  ];

  // Function to update content
  function updateContent(index) {
    // Update right panel content
    rightPanel.querySelector("h2").innerText = contentData[index].title;
    rightPanel.querySelector("p").innerText = contentData[index].description;

    // Update active card styling
    adCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }

  // Add click event to each ad card
  adCards.forEach((card, index) => {
    card.addEventListener("click", function () {
      updateContent(index);
    });
  });

  // Set default active state
  updateContent(0);
});

// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navButtons = document.querySelector(".nav-buttons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navButtons.classList.toggle("active");
});

// Close mobile menu when clicking a nav item
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove("active");
      navButtons.classList.remove("active");
    }
  });
});
