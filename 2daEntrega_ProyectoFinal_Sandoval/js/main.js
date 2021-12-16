//obtengo valores de entrada
let form2 = document.getElementById("form2");
let inputName = document.getElementById("userN");
let inputPass = document.getElementById("passW");
let error = document.getElementById("errorMSJ");

let msj =
  "La contraseña o el Usuario es incorrecto. Vuelve a intentarlo o haz clic en Registrarse.";
const almacenados = JSON.parse(localStorage.getItem("UsersCollection"));
form2.addEventListener("submit", validarFormulario);

//validar ingreso
function validarFormulario(e) {
  e.preventDefault();
  for (const user of almacenados) {
    if (inputName.value == user.name && inputPass.value == user.pass) {
      window.location.href = "../notepad.html";
    } else if (inputName.value != user.name || inputPass.value != user.pass) {
      addNote(error, msj);
      msj = "";
    }
  }
}

//agregar notas al DOM
function addNote(column, msjNote) {
  let div = document.createElement("div");
  div.textContent = msjNote;
  column.appendChild(div);
}
