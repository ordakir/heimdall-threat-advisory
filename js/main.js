const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute(
      "aria-expanded",
      isOpen
      );
  });

  navLinks.forEach(link) => {
  link.addEventListener("click", () => {
    navMenu.clasList.remove("is-open");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
      );
  });
  });
  
}
