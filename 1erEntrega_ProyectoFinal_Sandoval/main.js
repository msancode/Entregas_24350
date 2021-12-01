let start = parseFloat(prompt("- Registrarse [1]\n- Salir [2]"));
class User {
  constructor(name, pass) {
    this.name = name;
    this.pass = pass;
  }
}

let userLogin = (password = "");
let users = [];

function addUser() {
  for (let i = 1; i <= 1; i++) {
    users.push(
      new User(
        (userLogin = prompt("Ingrese el usuario: ")),
        (password = prompt("Ingrese una contraseña: "))
      )
    );
  }
  alert("Usuario creado!");
  return userLogin, password;
}

login = (name, pass) => {
  if (name == userLogin && pass == password) {
    alert("Se ha logueado correctamente!");
  }
};

switch (start) {
  case 1:
    addUser();

    let automaticLogin = prompt(
      "Desea Loguearse automaticamente? [ Y/N ]: "
    ).toUpperCase();

    if (automaticLogin == "Y") {
      login(userLogin, password);
    } else {
      alert("Usted no se ha logueado!");
    }
    break;

  case 2:
    alert("BYE BYE!");
    break;

  default:
    alert("No existe la opcion ingresada!");
    break;
}
