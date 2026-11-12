// Mobile Navigation Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});

// Close menu after clicking a navigation link

document.querySelectorAll("#navLinks a").forEach(function(link) {

    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });

});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("response").innerHTML =
        "Thank you, " + name + "! Your message has been submitted successfully.";

    contactForm.reset();

});