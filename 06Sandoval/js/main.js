//obtengo valores de entrada
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
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
$("#form").submit(function (e) {
  e.preventDefault();
  usersNewCollection.push(new User(userName.value, email.value, pwd.value));
  localStorage.setItem("UsersCollection", JSON.stringify(usersNewCollection));
  $("#succesMSJ").append(msj);
  msj = "";
});
