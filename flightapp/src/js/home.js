$(document).ready(function() {
  $(".js-datepicker").flatpickr();

  var maskNumeral = new Cleave(".js-mask-numeral", {
    numeral: true
  });

  $(".js-getTours").on("click", function(e) {
    e.preventDefault();

    $.ajax({
      method: "GET",
      url: "result.html",
      success: function(data) {
        $(".js-search-results").after(data);
        $("html, body").animate({ scrollTop: window.innerHeight }, 500);
      }
    });
  });
});
