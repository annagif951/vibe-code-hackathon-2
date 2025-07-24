// 🌗 Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

// 📜 Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    const targetId = this.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 📬 Contact Form Validation (if added later)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before submitting.");
    }
  });
}

// 🖼️ Image Preloading (if images are added later
const preloadImages = () => {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    const src = img.getAttribute("data-src");
    if (src) {
      img.src = src; // Set the actual image source
      img.removeAttribute("data-src"); // Clean up the attribute
    }
  });
};