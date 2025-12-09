// Show the lab section when clicking "Enter the Lab"
const enterBtn = document.getElementById("enterBtn");
const labSection = document.getElementById("lab");

enterBtn.addEventListener("click", () => {
  labSection.classList.remove("hidden");
  labSection.scrollIntoView({ behavior: "smooth" });
  enterBtn.style.display = "none";
});

// Optional: show inline message when form is submitted (Netlify will handle actual email)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", () => {
  formMessage.textContent = "Sending…";
});