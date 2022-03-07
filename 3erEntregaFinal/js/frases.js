//titulo animado
$("#hello").prepend("<h3>Frases</h3>");
$("h3").fadeOut("slow", () => {
  $("h3").fadeIn(1000);
});

//array
let autores = [];

//clase Autor
class Autor {
  constructor(id, autor, frase, img) {
    this.id = parseInt(id);
    this.autor = autor;
    this.frase = frase;
    this.img = img;
  }
}

//Realizo llamada asincrona hacia archivo local JSON
$.get("../data/frases.json", function (resp, estado) {
  console.log(resp);
  console.log(estado);

  if (estado == "success") {
    //paso de objeto item a objeto Autor
    for (const item of resp) {
      autores.push(new Autor(item.id, item.autor, item.frase, item.img));
    }
    console.log(autores);
    //envio a funcion autoresUI
    autoresUI(autores, "#autoresUIGrid");
  } else {
    console.log("Error en la carga de los datos");
  }
});

//muestro en DOM
function autoresUI(autores, id) {
  $(id).empty();
  //recorro array
  for (const autor of autores) {
    $(id).append(`<div class="wrapper" ;">
                    <img src= "${autor.img}" class="cardImg" alt="...">
                      <h3 class="name2">${autor.autor}</h3>
                      <p class="cardText">${autor.frase}</p>                      
                  </div>`);
  }
}

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
