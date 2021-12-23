//obtengo valores de entrada
let inputName = document.getElementById("userN");
let inputPass = document.getElementById("passW");

let msj =
  "La contraseña o el Usuario es incorrecto. Vuelve a intentarlo o haz clic en Registrarse.";
const almacenados = JSON.parse(localStorage.getItem("UsersCollection"));

$("#form2").submit(validarFormulario);

//validar ingreso
function validarFormulario(e) {
  e.preventDefault();
  for (const user of almacenados) {
    if (inputName.value == user.name && inputPass.value == user.pass) {
      window.location.href = "../notepad.html";
    } else if (inputName.value != user.name || inputPass.value != user.pass) {
      $("#errorMSJ").append(msj);
      msj = "";
    }
  }
}
