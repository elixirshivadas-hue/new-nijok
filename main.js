/* =========================================================
   NIJOK ODISHA
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");

    if (mobileMenuBtn && mainNav) {

        mobileMenuBtn.addEventListener("click", function () {

            mainNav.classList.toggle("mobile-open");

            const icon = mobileMenuBtn.querySelector("i");

            if (mainNav.classList.contains("mobile-open")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
    ====================================================== */

    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                mainNav.classList.remove("mobile-open");

                const icon = mobileMenuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* =====================================================
       SEARCH
    ====================================================== */

    const searchInput = document.getElementById("siteSearch");
    const searchResults = document.getElementById("searchResults");
    const searchMessage = document.getElementById("searchMessage");

    if (searchInput && searchResults) {

        searchInput.addEventListener("focus", function () {

            searchResults.classList.add("show");

        });


        searchInput.addEventListener("input", function () {

            const value = searchInput.value.trim().toLowerCase();

            if (value === "") {

                searchMessage.textContent =
                    "Start typing to search destinations and experiences.";

                return;

            }


            const searchItems = {

                temple: "Try Discover Odisha → Temples",

                temples: "Try Discover Odisha → Temples",

                beach: "Try Discover Odisha → Beaches",

                beaches: "Try Discover Odisha → Beaches",

                wildlife: "Try Discover Odisha → Wildlife",

                food: "Try Food & Culture → Odisha Cuisine",

                culture: "Try Food & Culture → Art & Heritage",

                puri: "Puri → Jagannath Temple and Puri Beach",

                konark: "Konark → Konark Sun Temple",

                chilika: "Chilika → Chilika Lake",

                odisha: "Explore all Odisha destinations"

            };


            let result = null;


            Object.keys(searchItems).forEach(function (key) {

                if (!result && value.includes(key)) {

                    result = searchItems[key];

                }

            });


            if (result) {

                searchMessage.textContent = result;

            } else {

                searchMessage.textContent =
                    "Search is ready. More destinations will be added soon.";

            }

        });

    }


    /* =====================================================
       CLOSE SEARCH WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener("click", function (event) {

        if (
            searchResults &&
            searchInput &&
            !searchResults.contains(event.target) &&
            !searchInput.contains(event.target)
        ) {

            searchResults.classList.remove("show");

        }

    });


    /* =====================================================
       FEATURED DESTINATION DOTS
    ====================================================== */

    const dots = document.querySelectorAll(".carousel-dots .dot");

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            dots.forEach(function (item) {

                item.classList.remove("active");

            });

            dot.classList.add("active");

        });

    });


    /* =====================================================
       IMAGE FALLBACK
    ====================================================== */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            image.style.backgroundColor = "#dfeae5";

            image.style.objectFit = "cover";

            image.removeAttribute("src");

        });

    });


    /* =====================================================
       HEADER SHADOW ON SCROLL
    ====================================================== */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {

            header.style.boxShadow =
                "0 5px 20px rgba(0, 50, 45, 0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll("[data-current-year]");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


});
