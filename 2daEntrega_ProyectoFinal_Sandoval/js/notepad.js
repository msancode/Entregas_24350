//obtengo valores de entrada
let note = document.getElementById("submit-content");
let post = document.getElementById("submit-note");
let toDo = document.getElementById("column-one");

//Declaracion de array global
const notesColecction = [];

//declaracion de clase
class NoteAddedToCollection {
  constructor(note) {
    this.note = note;
  }
}
//agregar notas al DOM
function addNote(column, note) {
  let div = document.createElement("div");
  div.textContent = note;
  column.appendChild(div);
}

//almacenando notas localmente a traves de eventos
post.addEventListener("click", function (e) {
  notesColecction.push(new NoteAddedToCollection(note.value));
  localStorage.setItem("notas", JSON.stringify(notesColecction));
  addNote(toDo, note.value);
  note.value = "";
});
