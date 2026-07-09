(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("navLinks");

    if (toggle && links) {
        toggle.addEventListener("click", function () {
            var isOpen = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        links.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                links.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    var year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
})();
