/* booking-modal.js — open the EZME booking calendar in an on-page lightbox.
   Progressive enhancement: the [data-booking] links work without JS (they
   open EZME in a new tab via their href/target). When this script runs it
   intercepts those clicks and shows the calendar in an overlay on top of the
   page instead, matching the live site. The iframe is loaded lazily the first
   time the overlay opens. */
(function () {
  "use strict";

  var modal = document.getElementById("booking-modal");
  var triggers = document.querySelectorAll("[data-booking]");
  if (!modal || !triggers.length) return;

  var dialog = modal.querySelector(".booking-modal__dialog");
  var iframe = modal.querySelector(".booking-modal__iframe");
  var closeBtn = modal.querySelector(".booking-modal__close");
  var lastFocused = null;
  var loaded = false;

  function open(e) {
    if (e) e.preventDefault();
    lastFocused = document.activeElement;

    // Load the EZME calendar on first open only.
    if (!loaded && iframe) {
      iframe.src = iframe.getAttribute("data-src");
      loaded = true;
    }

    modal.hidden = false;
    // Force a reflow so the opening transition runs from the hidden state.
    void modal.offsetWidth;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";

    var finish = function () {
      modal.hidden = true;
      modal.removeEventListener("transitionend", onEnd);
    };
    var onEnd = function (ev) {
      if (ev.target === dialog) finish();
    };

    // Wait for the close transition, with a fallback if it doesn't fire.
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
    } else {
      modal.addEventListener("transitionend", onEnd);
      window.setTimeout(finish, 400);
    }

    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  var i;
  for (i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", open);
  }

  var closers = modal.querySelectorAll("[data-booking-close]");
  for (i = 0; i < closers.length; i++) {
    closers[i].addEventListener("click", close);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) close();
  });
})();
