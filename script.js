document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-list a[href^='#']");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
      const isOpen = nav.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Close mobile menu when navigating
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});

