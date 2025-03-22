

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
