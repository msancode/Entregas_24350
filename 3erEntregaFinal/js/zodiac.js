//funcion signos
function zodiac() {
  //tomo input
  let day = document.getElementById("diaInput").value;
  let month = document.getElementById("mesInput").value;

  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    //quito de img el src para que no se pisen las img al preguntar por otro signo
    $("img").removeAttr("src");

    //muestro con efecto animacion las img
    $("#singImg").prepend("<img src='../icons/aquarius.png' width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });
    //info
    document.getElementById("infoSign").innerHTML = "Tu signo es Acuario.";
  }

  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/pisces.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Piscis.";
  }
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/aries.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Aries.";
  }

  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/taurus.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Tauro.";
  }

  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/gemini.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Geminis.";
  }

  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/cancer.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Cancer.";
  }
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/leo.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Leo.";
  }
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/virgo.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Virgo.";
  }
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/libra.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Libra.";
  }
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/scorpio.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Escorpio.";
  }
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/sagittarius.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Sagitario.";
  }

  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    $("img").removeAttr("src");
    $("#singImg").prepend("<img src='../icons/capricorn.png'width=90%>");
    $("img").fadeOut("slow", () => {
      $("img").fadeIn(3000);
    });

    document.getElementById("infoSign").innerHTML = "Tu signo es Capricornio.";
  } else if (month > 12 || day > 31) {
    document.getElementById("infoSign").innerHTML =
      "Ingrese una fecha correcta";
  }
}

//se activa al enviar el formulario
$("#form2").submit((e) => {
  e.preventDefault();
  zodiac();
});

//titulo animado
$("#hello").prepend("<h3>Zodiaco</h3>");
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
