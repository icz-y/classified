const statuses = [
  "Awaiting Assignment...",
  "Fixer En Route...",
  "Job in Progress...",
  "Cleanup Crew Dispatched...",
  "Mission Accomplished. No Witnesses.",
];

function updateStatus() {
  const statusElement = document.getElementById("status");
  const randomIndex = Math.floor(Math.random() * statuses.length);
  statusElement.textContent = statuses[randomIndex];
}

// Carousel functionality
let currentReviewIndex = 0;
const reviews = document.querySelectorAll(".review");
const totalReviews = reviews.length;

document.querySelector(".next").addEventListener("click", () => {
  reviews[currentReviewIndex].style.display = "none";
  currentReviewIndex = (currentReviewIndex + 1) % totalReviews;
  reviews[currentReviewIndex].style.display = "block";
});

document.querySelector(".prev").addEventListener("click", () => {
  reviews[currentReviewIndex].style.display = "none";
  currentReviewIndex = (currentReviewIndex - 1 + totalReviews) % totalReviews;
  reviews[currentReviewIndex].style.display = "block";
});

// Initialize the first review as visible
reviews[currentReviewIndex].style.display = "block";
