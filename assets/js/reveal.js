/* reveal.js — subtle staggered scroll-reveal for content (#23).

   Progressive enhancement: elements marked `.reveal` are hidden only while
   `html.js` is set (see the inline head snippet + tokens.css). This observer
   adds `.is-visible` when an element scrolls into view, fading it up into
   place. Items inside a `.reveal-stagger` container animate in sequence.

   Honours `prefers-reduced-motion`: if the user asked to reduce motion (or the
   browser lacks IntersectionObserver), everything is revealed immediately with
   no animation, so no content is ever left hidden. */
(function () {
  "use strict";

  var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!items.length) { return; }

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll() {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  if (reduce || !("IntersectionObserver" in window)) {
    revealAll();
    return;
  }

  // Pre-compute a small stagger for siblings inside a .reveal-stagger group so
  // a grid of cards cascades rather than popping in all at once.
  document.querySelectorAll(".reveal-stagger").forEach(function (group) {
    var kids = group.querySelectorAll(":scope > .reveal");
    Array.prototype.forEach.call(kids, function (el, i) {
      el.style.transitionDelay = Math.min(i * 70, 420) + "ms";
    });
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

  items.forEach(function (el) { io.observe(el); });
})();
