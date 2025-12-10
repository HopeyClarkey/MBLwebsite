const enterBtn = document.getElementById("enterBtn");
const labSection = document.getElementById("lab");

enterBtn.addEventListener("click", () => {
  labSection.classList.remove("hidden");
  labSection.scrollIntoView({ behavior: "smooth" });
  enterBtn.style.display = "none"; // hide button after click
});

// Custom validation for contact form (Netlify compatible)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // BLOCK submission ONLY if invalid
  if (!name) {
    e.preventDefault();
    formMessage.textContent = "💖 Oops! Please fill out your name.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("name").focus();
    return;
  }

  if (!email) {
    e.preventDefault();
    formMessage.textContent = "💖 Oops! Please fill out your email.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("email").focus();
    return;
  }

  if (!message) {
    e.preventDefault();
    formMessage.textContent = "💖 Oops! Please fill out your message.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("message").focus();
    return;
  }

  //  VALID — allow Netlify to submit normally
  formMessage.textContent = "Sending…";
  // do NOT preventDefault — Netlify needs the real form submission
});