/* cookie.js — shared cookie consent banner (#16).
   Visual/light only: this does NOT load or block any real cookies. It shows a
   dismissible banner with Accepter / Afvis buttons and remembers the choice in
   localStorage so it isn't shown again on the next visit.

   The banner markup is injected here so it stays identical across all pages.
   The link to the cookie policy needs a path prefix that differs between the
   root ("cookie-politik.html") and the sub-sites ("../cookie-politik.html").
   Pages set that via a `data-path-prefix` attribute on this script tag
   (defaults to "" for the root). */
(function () {
  "use strict";

  var STORAGE_KEY = "vds-cookie-consent";

  // Already decided? Then never build the banner.
  var stored;
  try { stored = window.localStorage.getItem(STORAGE_KEY); } catch (e) { stored = null; }
  if (stored === "accepted" || stored === "rejected") { return; }

  // Work out the relative prefix to the cookie policy page.
  var self = document.currentScript ||
    document.querySelector('script[src*="cookie.js"]');
  var prefix = (self && self.getAttribute("data-path-prefix")) || "";

  function remember(choice) {
    try { window.localStorage.setItem(STORAGE_KEY, choice); } catch (e) { /* ignore */ }
  }

  function build() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Cookie-samtykke");
    banner.innerHTML =
      '<div class="cookie-inner">' +
        '<p class="cookie-text">Vi bruger cookies til at forbedre din oplevelse på ' +
        'sitet. Du kan læse mere i vores ' +
        '<a href="' + prefix + 'cookie-politik.html">cookie-politik</a>.</p>' +
        '<div class="cookie-actions">' +
          '<button type="button" class="cookie-btn reject" data-choice="rejected">Afvis</button>' +
          '<button type="button" class="cookie-btn accept" data-choice="accepted">Accepter</button>' +
        '</div>' +
      '</div>';

    banner.addEventListener("click", function (e) {
      var btn = e.target.closest(".cookie-btn");
      if (!btn) { return; }
      remember(btn.getAttribute("data-choice"));
      banner.classList.remove("is-visible");
      // Remove from DOM after the choice is made.
      window.setTimeout(function () {
        if (banner.parentNode) { banner.parentNode.removeChild(banner); }
      }, 200);
    });

    document.body.appendChild(banner);
    // Reveal on the next frame so it can transition in if styled to.
    window.requestAnimationFrame(function () { banner.classList.add("is-visible"); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
