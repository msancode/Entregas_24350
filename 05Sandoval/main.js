let start = parseFloat(prompt("- Registrarse [1]\n- Salir [2]"));
class User {
  constructor(name, pass) {
    this.name = localStorage.setItem("name", name);
    this.pass = localStorage.setItem("pass", pass);
  }
}

let userLogin = (password = userNameInput = userPassInput = msj = "");
let users = [];

const messageHTML = (msj) => {
  let successAlert = document.createElement("p");
  successAlert.innerHTML = msj;
  document.body.appendChild(successAlert);
};

function addUser() {
  for (let i = 1; i <= 1; i++) {
    users.push(
      new User(
        (userLogin = prompt("Ingrese el usuario: ")),
        (password = prompt("Ingrese una contraseña: "))
      )
    );
  }

  msj = `<h2 class="h2p">Usuario: ${userLogin} creado!</h2>`;
  messageHTML(msj);
  return userLogin, password;
}

login = (name, pass) => {
  if (name == userLogin && pass == password) {
    msj = `<h2 class="h2p">${userLogin} Se ha logueado correctamente!</h2>`;
    messageHTML(msj);
  } else if (name != userLogin || pass != password) {
    msj = `<h2 class="h3p">Se ha logueado Incorrectamente!</h2>`;
    messageHTML(msj);
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
    } else if (automaticLogin == "N") {
      userNameInput = prompt("Ingrese nombre de usuario: ");
      userPassInput = prompt("Ingrese contraseña: ");
      login(userNameInput, userPassInput);
    } else {
      msj = `<h2 class="h3p">Usted no se ha logueado!</h2>`;
      messageHTML(msj);
    }
    break;

  case 2:
    msj = `<h2 class="h3p">BYE BYE!</h2>`;
    messageHTML(msj);
    break;

  default:
    msj = `<h2 class="h3p">No existe la opcion ingresada!</h2>`;
    messageHTML(msj);
    break;
}
