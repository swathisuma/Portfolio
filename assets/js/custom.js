/* custom.js - Enhanced interactions for Swathi Sumana Vupparapally's Portfolio */

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section, #particles-js");

    // 1. Sticky Navbar on Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // 2. ScrollSpy - update active link in navbar
        let currentSectionId = "home";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        // Treat particles-js as home
        if (currentSectionId === "particles-js") {
            currentSectionId = "home";
        }

        navLinks.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href").substring(1);
            if (href === currentSectionId) {
                link.classList.add("active");
            }
        });
    });

    // 3. Mobile Navigation Menu Toggle
    navToggle.addEventListener("click", function () {
        navToggle.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navToggle.classList.remove("active");
            navLinksContainer.classList.remove("active");
        });
    });
});
