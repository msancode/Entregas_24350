//obtengo valores de entrada
let id = (id) => document.getElementById(id);
let userName = id("userName"),
  email = id("email"),
  pwd = id("pwd"),
  hello = id("hello");

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

//animacion jquery
$("#hello").prepend("<h3>Hola!</h3>");
$("h3").fadeOut("slow", () => {
  $("h3").fadeIn(1000);
});

//almacenando user localmente
$("#form").submit((e) => {
  e.preventDefault();
  usersNewCollection.push(new User(userName.value, email.value, pwd.value));
  localStorage.setItem("UsersCollection", JSON.stringify(usersNewCollection));
  $("#succesMSJ").append(
    "<p>Nuevo Usuario creado!. vuelva a la pagina de Login para ingresar.</p>"
  );
  $("p").fadeOut(3500, () => {});
});

// Animate + encadenado de animaciones
$("#saludoAnimate")
  .animate({ fontSize: "30px", opacity: 0.7 }, 1500)
  .fadeOut(2000);
