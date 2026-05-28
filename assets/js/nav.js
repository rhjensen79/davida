/* nav.js — shared site behaviour for the sub-site top-nav (#4).
   Progressive enhancement: the nav links are visible/usable without JS;
   this only adds the mobile hamburger toggle and the footer year stamp. */
(function () {
  "use strict";

  // Mobile nav toggle ------------------------------------------------------
  var toggle = document.querySelector(".site-nav .nav-toggle");
  var links = document.querySelector(".site-nav .nav-links");

  if (toggle && links) {
    var close = function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    var open = function () {
      links.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") {
        close();
      } else {
        open();
      }
    });

    // Close after choosing a destination, or on Escape.
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) { close(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        close();
        toggle.focus();
      }
    });
  }

  // Footer year ------------------------------------------------------------
  var year = document.getElementById("year");
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
