//obtengo valores de entrada
let ide = (ide) => document.getElementById(ide);
let form = ide("form"),
  textInput = ide("text-input"),
  ulItems = ide("ul-items");

//Declaracion de array global
let notesColecction = [];

//agrega a localstorage
function addLocalStorage(notesColecction) {
  localStorage.setItem("notes", JSON.stringify(notesColecction));
  renderNotes(notesColecction);
}

//trae del localstorage
function getLocalStorage() {
  const doesNoteExist = localStorage.getItem("notes");
  if (doesNoteExist) {
    notesColecction = JSON.parse(doesNoteExist);
    renderNotes(notesColecction);
  }
}
getLocalStorage();

//agrega notas
function addNote(nota) {
  //verifico que si esta vacio no se agrega
  if (nota !== "") {
    const notaObject = {
      id: Math.random(),
      note: nota,
      done: false,
    };
    notesColecction.push(notaObject);
    //envio a localstorage
    addLocalStorage(notesColecction);
    //limpio input
    textInput.value = "";
  }
}

//muestro en el DOM
function renderNotes(notesColecction) {
  ulItems.innerHTML = "";
  //recorro array
  notesColecction.forEach((note) => {
    //verifico si esta en estado completado o done
    const checked = note.done ? "checked" : null;
    //creo elementos li
    const li = document.createElement("li");
    //agrego atributos a esos li
    li.setAttribute("class", "item");
    li.setAttribute("id-key", note.id);

    //si esta en estado done o completado le agrego una clase
    if (note.done === true) {
      li.classList.add("checked");
    }
    //muestro en DOM
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${note.note}
      <button class="delete-button">X</button>
    `;
    //agrego los li a ul
    ulItems.append(li);
  });
}

//cambia de estado la nota
function toggle(id) {
  notesColecction.forEach((note) => {
    if (note.id == id) {
      note.done = !note.done;
    }
  });
  addLocalStorage(notesColecction);
}

//borra nota
function deleteNote(id) {
  //filtro por id
  notesColecction = notesColecction.filter((note) => {
    return note.id != id;
  });
  addLocalStorage(notesColecction);
}

//escucho por el submit del formulario
$("#form").submit((e) => {
  e.preventDefault();
  addNote(textInput.value);
});

//escucho  si se chequea o borra una nota
$("#ul-items").click((e) => {
  if (e.target.type === "checkbox") {
    toggle(e.target.parentElement.getAttribute("id-key"));
  }
  if (e.target.classList.contains("delete-button")) {
    deleteNote(e.target.parentElement.getAttribute("id-key"));
  }
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

//titulo animado
$("#hello").prepend("<h3>Notas</h3>");
$("h3").fadeOut("slow", () => {
  $("h3").fadeIn(1000);
});
