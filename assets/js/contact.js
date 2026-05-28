/* contact.js — NON-FUNCTIONAL MOCK.
   Visual-only: the People & Performance lead/contact form does not submit
   anywhere. Clicking "Jeg vil gerne høre mere" just hides the form and reveals
   a static confirmation panel. "Send en ny henvendelse" reverses the toggle.
   No backend, no network. */
(function () {
  var form = document.getElementById("contact-form");
  var success = document.getElementById("contact-success");
  var submit = document.getElementById("contact-submit");
  var reset = document.getElementById("contact-reset");
  if (!form || !success || !submit) return;

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  if (reset) {
    reset.addEventListener("click", function (e) {
      e.preventDefault();
      success.hidden = true;
      form.hidden = false;
      form.reset();
    });
  }
})();
