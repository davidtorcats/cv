$(document).ready(function () {
  $("#contact-form").on("submit", function (event) {
    event.preventDefault();
    $("#success-alert").removeClass("d-none");
    setTimeout(function () {
      $("#success-alert").addClass("d-none");
    }, 3000);
  });
});
