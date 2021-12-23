//obtengo valores de entrada
let note = document.getElementById("submit-content");

//Declaracion de array global
const notesColecction = [];

//declaracion de clase
class NoteAddedToCollection {
  constructor(note) {
    this.note = note;
  }
}

//almacenando notas localmente a traves de eventos
$("#submit-note").click((e) => {
  notesColecction.push(new NoteAddedToCollection(note.value));
  localStorage.setItem("notas", JSON.stringify(notesColecction));
  $("#column-one").append(note.value + "<br>");
  note.value = "";
});
