/* signup.js — NON-FUNCTIONAL MOCK.
   Visual-only: the Workout signup form does not submit anywhere. Clicking
   "Tilmeld dig nu" just hides the form and reveals a static confirmation
   panel. "Tilmeld endnu en" reverses the toggle. No backend, no network. */
(function () {
  var form = document.getElementById("signup-form");
  var success = document.getElementById("signup-success");
  var submit = document.getElementById("signup-submit");
  var reset = document.getElementById("signup-reset");
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
