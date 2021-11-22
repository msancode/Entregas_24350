let temperatura = prompt("Ingrese un numero: ");

if (temperatura < 0) {
  alert("Paleta de helado");
} else if (temperatura > 0 && temperatura < 15) {
  alert("ACHUU!!");
} else if (temperatura > 15 && temperatura < 40) {
  alert(" dia normal ");
} else if (temperatura > 40 && temperatura < 100) {
  alert("Pollo Asado");
} else if (temperatura > 100) {
  alert(" Im Walking On Sunshine");
}
