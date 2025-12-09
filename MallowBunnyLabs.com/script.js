// Grab the button and the hidden lab section
const enterBtn = document.getElementById("enterBtn");
const labSection = document.getElementById("lab");

// Add click behavior
enterBtn.addEventListener("click", () => {
  // Reveal the hidden lab section
  labSection.classList.remove("hidden");

  // Scroll to it smoothly
  labSection.scrollIntoView({ behavior: "smooth" });

  // Hide the button after click
  enterBtn.style.display = "none";
});