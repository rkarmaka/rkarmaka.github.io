document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    
    // Only handle internal scroll links like #section
    if (href.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: "smooth",
          });
        }
      });
    }
  });
});



// Testimonial slider functionality
const cards = document.querySelectorAll('.testimonial-card');
if (cards.length) {
  let current = 0;
  setInterval(()=>{
    cards[current].classList.remove('active');
    current = (current + 1) % cards.length;
    cards[current].classList.add('active');
  }, 5000);
}



// Smooth scrolling for buttons with class 'scroll-btn'
// This assumes you have buttons with class 'scroll-btn' and a data-target attribute
// that corresponds to the ID of the section you want to scroll to
document.addEventListener('DOMContentLoaded', function () {
  const scrollButtons = document.querySelectorAll('.scroll-btn');

  scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -70; // Offset for fixed navbar
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});


// Cycle themes: light → dark → warm → neutral
const themes = ["light", "dark", "warm", "neutral", "seedling"];
let current = 0;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);

  // Update icon based on theme
  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  if (theme === "dark") {
    icon.className = "fas fa-moon"; // moon icon for dark
  } else if (theme === "warm") {
    icon.className = "fas fa-earth-americas"; // earthy
  } else if (theme === "neutral") {
    icon.className = "fas fa-adjust"; // minimal neutral
  } else if (theme === "seedling") {
    icon.className = "fas fa-seedling"; // seedling
  } else {
    icon.className = "fas fa-sun"; // default light
  }
}

function toggleTheme() {
  current = (current + 1) % themes.length;
  setTheme(themes[current]);
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  current = themes.indexOf(saved) >= 0 ? themes.indexOf(saved) : 0;
  setTheme(themes[current]);

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);
});
