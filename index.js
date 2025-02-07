document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const submitButton = document.getElementById("submit-button");

    if (!name || !email || !message) {
      event.preventDefault(); // Prevent form submission

      // Add the runaway animation class
      submitButton.classList.add("runaway-animation");

      // Remove the animation class after it finishes
      submitButton.addEventListener(
        "animationend",
        () => {
          submitButton.classList.remove("runaway-animation");
        },
        { once: true }
      ); // Ensure the event listener is removed after running once
    }
  });
