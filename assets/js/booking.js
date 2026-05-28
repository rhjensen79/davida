/* booking.js — Klinik mock booking calendar + time-slot picker (#7) and the
   booking form → confirmation swap (#8).

   NON-FUNCTIONAL / VISUAL ONLY. This generates a realistic-looking month
   calendar for the CURRENT month and a time-slot list, purely so the design
   can be tested. There is NO backend, NO real availability and NO network
   call — "available", "booked" and "unavailable" are deterministic mock data
   derived from the date so the widget always looks live. In production a real
   scheduling system (Calendly, Acuity or similar) would replace this.

   Progressive enhancement: if JS is off the section still shows the heading,
   the "Book via mail / Ring" actions and an empty widget shell. */
(function () {
  "use strict";

  var grid = document.getElementById("cal-days");
  if (!grid) { return; } // not on the Klinik page

  var titleEl = document.getElementById("cal-title");
  var prevBtn = document.getElementById("cal-prev");
  var nextBtn = document.getElementById("cal-next");

  var slotsTitle = document.getElementById("slots-title");
  var slotsSub = document.getElementById("slots-sub");
  var slotsEmpty = document.getElementById("slots-empty");
  var slotGrid = document.getElementById("slot-grid");
  var continueBox = document.getElementById("slots-continue");
  var continueSummary = document.getElementById("continue-summary");

  // Booking form (issue #8) — visual-only prefill + confirmation swap.
  var dtField = document.getElementById("bf-datetime");
  var selectedLabel = null; // human-readable "<day>. <month> kl. <time>" of the pick

  var MONTHS = ["januar", "februar", "marts", "april", "maj", "juni",
    "juli", "august", "september", "oktober", "november", "december"];
  var ALL_SLOTS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // The month currently shown; start on the real current month.
  var viewYear = today.getFullYear();
  var viewMonth = today.getMonth();

  // Only allow browsing the current month and the next two (mock horizon).
  var minStamp = viewYear * 12 + viewMonth;
  var maxStamp = minStamp + 2;

  var selectedKey = null;   // "YYYY-M-D" of the chosen day
  var selectedSlotBtn = null;

  function dateKey(y, m, d) { return y + "-" + m + "-" + d; }

  // Deterministic pseudo-randomness so the same date always renders the same
  // state across reloads (no real data, just stable mock variety).
  function hash(n) {
    n = (n ^ 61) ^ (n >>> 16);
    n = n + (n << 3);
    n = n ^ (n >>> 4);
    n = n * 0x27d4eb2d;
    n = n ^ (n >>> 15);
    return Math.abs(n);
  }

  // A weekday is bookable unless it's a weekend or a mock "closed" day.
  function dayState(date) {
    if (date < today) { return "past"; }
    var dow = date.getDay(); // 0 Sun … 6 Sat
    if (dow === 0 || dow === 6) { return "unavailable"; } // closed weekends
    var h = hash(date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate());
    if (h % 7 === 0) { return "unavailable"; } // occasional closed weekday
    return "available";
  }

  // Mock which time slots are booked for a given day (stable per day).
  function bookedSlots(date) {
    var h = hash(date.getFullYear() * 99991 + date.getMonth() * 131 + date.getDate());
    var booked = {};
    ALL_SLOTS.forEach(function (t, i) {
      // ~2 of the slots taken, varying by day; never all of them.
      if ((h >> i) % 3 === 0) { booked[t] = true; }
    });
    return booked;
  }

  function clearSlots() {
    selectedSlotBtn = null;
    slotGrid.innerHTML = "";
    slotGrid.hidden = true;
    continueBox.classList.remove("is-visible");
  }

  function renderSlots(date) {
    clearSlots();
    var booked = bookedSlots(date);
    var label = date.getDate() + ". " + MONTHS[date.getMonth()];
    slotsTitle.textContent = "Ledige tider · " + label;
    slotsSub.textContent = "Vælg et tidspunkt, der passer dig.";
    slotsEmpty.hidden = true;

    ALL_SLOTS.forEach(function (time) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slot";
      btn.textContent = time;
      if (booked[time]) {
        btn.disabled = true;
        btn.setAttribute("aria-label", time + " — optaget");
      } else {
        btn.setAttribute("aria-pressed", "false");
        btn.addEventListener("click", function () {
          if (selectedSlotBtn) { selectedSlotBtn.setAttribute("aria-pressed", "false"); }
          btn.setAttribute("aria-pressed", "true");
          selectedSlotBtn = btn;
          continueSummary.textContent = "Valgt: " + label + " kl. " + time +
            " — fysiurgisk massage. (Demo — ingen tid reserveres.)";
          continueBox.classList.add("is-visible");
          // Reflect the pick in the booking form's read-only date/time field.
          selectedLabel = label + " kl. " + time;
          if (dtField) { dtField.value = selectedLabel; }
        });
      }
      slotGrid.appendChild(btn);
    });
    slotGrid.hidden = false;
  }

  function selectDay(btn, date) {
    if (selectedKey) {
      var prev = grid.querySelector('[aria-pressed="true"]');
      if (prev) { prev.setAttribute("aria-pressed", "false"); }
    }
    btn.setAttribute("aria-pressed", "true");
    selectedKey = btn.dataset.key;
    renderSlots(date);
  }

  function render() {
    grid.innerHTML = "";
    titleEl.textContent = MONTHS[viewMonth] + " " + viewYear;

    var stamp = viewYear * 12 + viewMonth;
    prevBtn.disabled = stamp <= minStamp;
    nextBtn.disabled = stamp >= maxStamp;

    var first = new Date(viewYear, viewMonth, 1);
    // Convert JS Sunday=0 week to Monday-first offset.
    var lead = (first.getDay() + 6) % 7;
    var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    for (var i = 0; i < lead; i++) {
      var blank = document.createElement("div");
      blank.className = "cal-day is-empty";
      blank.setAttribute("aria-hidden", "true");
      grid.appendChild(blank);
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var date = new Date(viewYear, viewMonth, d);
      var state = dayState(date);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cal-day";
      btn.textContent = String(d);
      btn.dataset.key = dateKey(viewYear, viewMonth, d);

      if (date.getTime() === today.getTime()) { btn.classList.add("is-today"); }

      if (state === "past") {
        btn.classList.add("is-past");
        btn.disabled = true;
        btn.setAttribute("aria-label", d + ". " + MONTHS[viewMonth] + " — passeret");
      } else if (state === "unavailable") {
        btn.classList.add("is-unavailable");
        btn.disabled = true;
        btn.setAttribute("aria-label", d + ". " + MONTHS[viewMonth] + " — ingen ledige tider");
      } else {
        btn.setAttribute("aria-pressed", btn.dataset.key === selectedKey ? "true" : "false");
        btn.setAttribute("aria-label", d + ". " + MONTHS[viewMonth] + " — ledig");
        (function (b, dt) {
          b.addEventListener("click", function () { selectDay(b, dt); });
        })(btn, date);
      }
      grid.appendChild(btn);
    }
  }

  prevBtn.addEventListener("click", function () {
    if (prevBtn.disabled) { return; }
    if (viewMonth === 0) { viewMonth = 11; viewYear--; } else { viewMonth--; }
    render();
  });
  nextBtn.addEventListener("click", function () {
    if (nextBtn.disabled) { return; }
    if (viewMonth === 11) { viewMonth = 0; viewYear++; } else { viewMonth++; }
    render();
  });

  render();

  // ── Booking form → confirmation panel (issue #8) ────────────────────────
  // NON-FUNCTIONAL: nothing is submitted. The button only copies whatever was
  // typed into the static kvittering panel and swaps the form out for it.
  var submitBtn = document.getElementById("bf-submit");
  var formStep = document.getElementById("book-form");
  var confirmPanel = document.getElementById("booking-confirm");

  if (submitBtn && formStep && confirmPanel) {
    submitBtn.addEventListener("click", function () {
      var name = (document.getElementById("bf-name").value || "").trim();
      var email = (document.getElementById("bf-email").value || "").trim();
      var treatmentSel = document.getElementById("bf-treatment");
      var treatment = treatmentSel.options[treatmentSel.selectedIndex].text;
      var datetime = (dtField && dtField.value) || selectedLabel || "Efter aftale";

      var firstName = name ? name.split(" ")[0] : "tak";
      setText("bc-name", name ? firstName : "tak for din booking");
      setText("bc-fullname", name || "—");
      setText("bc-email", email || "—");
      setText("bc-treatment", treatment);
      setText("bc-datetime", datetime);

      formStep.style.display = "none";
      confirmPanel.classList.add("is-visible");
      confirmPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) { el.textContent = value; }
  }
})();
