const button = document.getElementById("submit-button");

// Function to animate the button's movement across the screen
const moveButtonAcrossScreen = (element) => {
  const screenWidth = window.innerWidth - element.offsetWidth;
  const screenHeight = window.innerHeight - element.offsetHeight;

  // Define a path for the button to move (e.g., left to right, diagonally, etc.)
  anime({
    targets: element,
    left: screenWidth, // Move horizontally across the screen
    duration: 2000,
    easing: "easeInOutQuad",
  });
};

// Add event listeners for "mouseover" and "click"
["mouseover", "click"].forEach(function (eventType) {
  button.addEventListener(eventType, function (event) {
    // Prevent form submission on click
    if (eventType === "click") {
      event.preventDefault();
    }

    // Move the button across the screen
    moveButtonAcrossScreen(this);
  });
});

// Prevent form submission when the form is submitted
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
