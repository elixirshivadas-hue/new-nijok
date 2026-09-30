/* =========================================================
   NIJOK ODISHA
   MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            mobileNav.classList.toggle("active");

            const isOpen = mobileNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";
            }
        });


        /* Close when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                mobileNav.classList.contains("active") &&
                !mobileNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMobileMenu();
            }

        });


        /* Close after clicking a navigation link */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {
                closeMobileMenu();
            });

        });
    }


    function closeMobileMenu() {

        if (!mobileNav || !menuToggle) {
            return;
        }

        mobileNav.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.className = "fa-solid fa-bars";
        }
    }


    /* =====================================================
       SEARCH
       ===================================================== */

    const searchBox =
        document.querySelector(".search-box");

    const searchInput =
        document.querySelector(".search-box input");

    const searchButton =
        document.querySelector(".search-box button");

    const searchResults =
        document.querySelector(".search-results");


    if (
        searchBox &&
        searchInput &&
        searchButton &&
        searchResults
    ) {

        searchButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                performSearch();

            }
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    performSearch();
                }

            }
        );


        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value.trim();

                if (query.length === 0) {

                    hideSearchResults();

                }

            }
        );


        document.addEventListener(
            "click",
            function (event) {

                if (
                    !searchBox.contains(event.target) &&
                    !searchResults.contains(event.target)
                ) {
                    hideSearchResults();
                }

            }
        );

    }


    function performSearch() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (!query) {

            searchInput.focus();

            return;
        }


        const searchableItems = [

            {
                title: "Jagannath Temple",
                description:
                    "Sacred temple and one of Odisha's most important cultural landmarks.",
                link: "temples.html"
            },

            {
                title: "Konark Sun Temple",
                description:
                    "UNESCO World Heritage Site famous for its magnificent stone architecture.",
                link: "temples.html"
            },

            {
                title: "Chilika Lake",
                description:
                    "Asia's largest brackish water lagoon and a major wildlife destination.",
                link: "destinations.html"
            },

            {
                title: "Similipal National Park",
                description:
                    "A rich wildlife landscape known for forests, waterfalls and biodiversity.",
                link: "wildlife.html"
            },

            {
                title: "Puri Beach",
                description:
                    "A popular coastal destination known for its beach and cultural atmosphere.",
                link: "beaches.html"
            },

            {
                title: "Pakhala Bhata",
                description:
                    "Traditional fermented rice dish and an important part of Odisha cuisine.",
                link: "food-culture.html"
            },

            {
                title: "Raghurajpur",
                description:
                    "Heritage crafts village known for traditional Pattachitra artwork.",
                link: "food-culture.html"
            },

            {
                title: "Chhena Poda",
                description:
                    "Traditional Odisha dessert prepared with fresh cottage cheese.",
                link: "food-culture.html"
            },

            {
                title: "Dhauli",
                description:
                    "Historic Buddhist heritage site associated with the Kalinga War.",
                link: "destinations.html"
            },

            {
                title: "Odisha Regions",
                description:
                    "Explore the diverse regions, landscapes and cultural identities of Odisha.",
                link: "regions.html"
            },

            {
                title: "Odisha Wildlife",
                description:
                    "Discover forests, sanctuaries, national parks and wildlife experiences.",
                link: "wildlife.html"
            },

            {
                title: "Odisha Beaches",
                description:
                    "Explore Odisha's coastal destinations and beautiful beaches.",
                link: "beaches.html"
            },

            {
                title: "Odisha Temples",
                description:
                    "Explore ancient temples, sacred architecture and heritage sites.",
                link: "temples.html"
            },

            {
                title: "Odisha Food & Culture",
                description:
                    "Explore traditional food, crafts, festivals and cultural experiences.",
                link: "food-culture.html"
            }

        ];


        const results =
            searchableItems.filter(function (item) {

                return (
                    item.title
                        .toLowerCase()
                        .includes(query) ||

                    item.description
                        .toLowerCase()
                        .includes(query)
                );

            });


        renderSearchResults(results, query);

    }


    function renderSearchResults(results, query) {

        if (!searchResults) {
            return;
        }


        searchResults.innerHTML = "";


        if (results.length === 0) {

            searchResults.innerHTML = `
                <div class="search-result">
                    <div>
                        <strong>No results found</strong>
                        <span>
                            Try searching for temples, beaches,
                            wildlife, food or destinations.
                        </span>
                    </div>
                </div>
            `;

            searchResults.classList.add("active");

            return;
        }


        const heading = document.createElement("div");

        heading.className = "search-result-heading";

        heading.textContent =
            `Results for "${query}"`;

        searchResults.appendChild(heading);


        results.forEach(function (item) {

            const result =
                document.createElement("a");

            result.className = "search-result";

            result.href = item.link;

            result.innerHTML = `
                <div>
                    <strong>${item.title}</strong>
                    <span>${item.description}</span>
                </div>

                <i class="fa-solid fa-arrow-right"></i>
            `;

            searchResults.appendChild(result);

        });


        searchResults.classList.add("active");

    }


    function hideSearchResults() {

        if (searchResults) {
            searchResults.classList.remove("active");
        }

    }


    /* =====================================================
       KEYBOARD ESCAPE
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMobileMenu();
                hideSearchResults();

            }

        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =====================================================
       IMAGE FALLBACK
       ===================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.classList.add(
                    "image-error"
                );

            }
        );

    });


    /* =====================================================
       CURRENT PAGE NAVIGATION
       ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";


    const allNavLinks =
        document.querySelectorAll(
            ".main-nav a, .mobile-nav a"
        );


    allNavLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (
            href &&
            href === currentPage
        ) {
            link.classList.add("active");
        }

    });

});
