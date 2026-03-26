function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const texts = [
  "Software Tester",
  "QA Engineer",
  "Automation Tester",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[index];
  const display = document.getElementById("typing-text");

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  display.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500; // pause
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ===== SCROLL ANIMATION ===== */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Optional: stop observing once animated
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
});
