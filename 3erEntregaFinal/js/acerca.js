$("body").prepend('<h3 id="p1">MEJORAS PROXIMAMENTE...</h3>');
$("#p1").css("color", "blue").slideUp(1000).slideDown(1500);

$("#hello").prepend("<h3>Acerca</h3>");
$("h3").fadeOut("slow", () => {
  $("h3").fadeIn(1000);
});

//Ir hacia arriba
$("#down").click(function (e) {
  e.preventDefault();
  $("html").animate(
    {
      scrollTop: $("#up").offset().top,
    },
    2000
  );
});
