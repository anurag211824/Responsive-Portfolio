document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navbarLinks = document.querySelectorAll(".navbar-link");
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");

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
      navbar.classList.remove("open"); // Close navbar on link click
    });
  });
  
    hamburger.addEventListener("click", function() {
      navbar.classList.add("open");
    });
  
    closeBtn.addEventListener("click", function() {
      navbar.classList.remove("open");
    });
  

  // Form submission handling
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    alert(`Name: ${formData.get("name")}\nEmail: ${formData.get("ak06666664@gmail.com")}\nMessage: ${formData.get("message")}`);
    contactForm.reset();
  });
});
