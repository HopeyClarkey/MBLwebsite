// 1️⃣ Show the lab section when clicking "Enter the Kitchen"
const enterBtn = document.getElementById("enterBtn");
const labSection = document.getElementById("lab");

enterBtn.addEventListener("click", () => {
  labSection.classList.remove("hidden");
  labSection.scrollIntoView({ behavior: "smooth" });
  enterBtn.style.display = "none"; // hide button after click
});

// 2️⃣ Custom validation for contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default submission until validated

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    formMessage.textContent = "💖 Oops! Please fill out your name.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("name").focus();
    return;
  }

  if (!email) {
    formMessage.textContent = "💖 Oops! Please fill out your email.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("email").focus();
    return;
  }

  if (!message) {
    formMessage.textContent = "💖 Oops! Please fill out your message.";
    formMessage.style.color = "#ffbaff";
    formMessage.style.textShadow = "0 0 6px #d14cff";
    document.getElementById("message").focus();
    return;
  }

  // All fields valid — submit to Netlify
  formMessage.textContent = "Sending…";
  contactForm.submit();
});
