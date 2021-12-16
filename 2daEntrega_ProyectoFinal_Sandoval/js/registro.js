//obtengo valores de entrada
let form = document.getElementById("form");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let succes = document.getElementById("succesMSJ");

let msj =
  "Usted creo con exito un nuevo Usuario!. vuelva a la pagina de Login para ingresar.";

//Declaracion de array global
const usersNewCollection = [];

//Declarando clase
class User {
  constructor(name, email, pass) {
    this.name = name;
    this.email = email;
    this.pass = pass;
  }
}

//almacenando notas localmente a traves de eventos
form.onsubmit = (e) => {
  e.preventDefault();
  let items = form.children;
  usersNewCollection.push(new User(userName.value, email.value, pwd.value));
  localStorage.setItem("UsersCollection", JSON.stringify(usersNewCollection));
  addNote(succes, msj);
  msj = "";
};

//agregar notas al DOM
function addNote(column, msjNote) {
  let div = document.createElement("div");
  div.textContent = msjNote;
  column.appendChild(div);
}