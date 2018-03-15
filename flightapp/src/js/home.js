$(document).ready(function() {
  $(".js-datepicker").flatpickr();

  var maskNumeral = new Cleave(".js-mask-numeral", {
    numeral: true
  });

  $(".js-getTours").on("click", function(e) {
    e.preventDefault();
    location.href = "result.html";
  });
});
