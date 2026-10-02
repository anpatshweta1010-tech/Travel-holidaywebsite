/* =====================================================
   TRAVEL & HOLIDAYS - HOME PAGE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       1. NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        function handleNavbar() {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }

        // Run when page is scrolled
        window.addEventListener("scroll", handleNavbar);

        // Run once when page loads
        handleNavbar();
    }


    /* =================================================
       2. MOBILE NAVBAR CLOSE
    ================================================= */

    const navLinks =
        document.querySelectorAll(".navbar .nav-link");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    if (navLinks.length > 0 && navbarCollapse) {

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                if (
                    window.innerWidth < 992 &&
                    navbarCollapse.classList.contains("show")
                ) {

                    const bsCollapse =
                        bootstrap.Collapse.getInstance(
                            navbarCollapse
                        );

                    if (bsCollapse) {

                        bsCollapse.hide();

                    }

                }

            });

        });

    }


    /* =================================================
       3. HERO BUTTON CLICK EFFECT
    ================================================= */

    const heroButtons =
        document.querySelectorAll(".hero-buttons .btn");


    heroButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {

                button.style.transform = "";

            }, 120);

        });

    });


});