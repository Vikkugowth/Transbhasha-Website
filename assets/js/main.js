document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  const sunIcon = themeToggle.querySelector(".sun-icon");
  const moonIcon = themeToggle.querySelector(".moon-icon");

  const currentTheme = localStorage.getItem("theme") || "light";
  html.classList.toggle("dark", currentTheme === "dark");
  updateThemeIcon(currentTheme);

  function updateThemeIcon(theme) {
    sunIcon.classList.toggle("hidden", theme !== "dark");
    moonIcon.classList.toggle("hidden", theme === "dark");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = html.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    html.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
});


// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileMenu.querySelectorAll("a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
})



// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})








