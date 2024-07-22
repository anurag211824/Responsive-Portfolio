document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navbarLinks = document.querySelectorAll(".navbar-link");
  const navbar = document.querySelector(".navbar");
  const navIcons = document.querySelectorAll(".mobile-nav-icon");

  // Smooth scrolling for navigation links
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - header.offsetHeight,
        behavior: "smooth",
      });
    });
  });

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    alert(`Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`);
    contactForm.reset();
  });
});
