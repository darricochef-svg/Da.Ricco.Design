console.log("script.js loaded");
/* ==========================================
   DA RICCO DESIGN
   JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Fade Up Animation
    =============================== */

    const elements = document.querySelectorAll(
        ".service-card, .portfolio-card, .about-content, .about-image, .review-box, .contact-form, .section-title"
    );

    elements.forEach(el => {
        el.classList.add("fade-up");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elements.forEach(el => observer.observe(el));



    /* ===============================
       Smooth Navigation
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });



    /* ===============================
       Navbar Background
    =============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            navbar.style.background = "rgba(247,244,238,.98)";
            navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.06)";

        }else{

            navbar.style.background = "rgba(247,244,238,.92)";
            navbar.style.boxShadow = "none";

        }

    });

});
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const status = document.getElementById("form-status");

    emailjs.sendForm(
        "service_yw7c1xd",
        "template_usuop2g",
        this
    ).then(() => {

        status.textContent = "✓ Thank you! Your message has been sent successfully.";
        status.style.color = "#2e7d32";

        document.getElementById("contact-form").reset();

    }).catch((error) => {

        status.textContent = "✗ Sorry, something went wrong. Please try again.";
        status.style.color = "#c62828";

        console.error(error);

    });
});