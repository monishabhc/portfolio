/* ============================
   Mobile Navigation Toggle
   ============================ */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // Swap hamburger / close icon
  const icon = navToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    const icon = navToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

/* ============================
   Sticky Navbar Shadow on Scroll
   ============================ */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ============================
   Active Nav Link Highlight
   ============================ */
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-links a");

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -60% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${entry.target.id}`) {
          item.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((section) => sectionObserver.observe(section));

/* ============================
   Scroll-triggered Fade-in Animations
   ============================ */
const fadeElements = document.querySelectorAll(
  ".about-content, .skill-card, .project-card, .contact-wrapper"
);

fadeElements.forEach((el) => el.classList.add("fade-in"));

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));

/* ============================
   Contact Form Handler
   ============================ */
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Simple feedback – replace with a real backend / email API
  const btn = contactForm.querySelector("button");
  btn.textContent = "Message Sent!";
  btn.disabled = true;
  contactForm.reset();

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
  }, 3000);
});