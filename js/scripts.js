(function ($) {
    "use strict";

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: 80,
    });

    var year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
})(jQuery);
