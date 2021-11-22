let saludoEleccion = parseFloat(
  prompt(
    "Buen dia!\n - Le gustaria sacar el promedio de notas de los alumnos? [1]\n - O saber si un alumno ha alcanzado la promocion? [2]"
  )
);

let cont = (nota = suma = cantidad = 0);

switch (saludoEleccion) {
  case 1:
    cantidad = parseFloat(prompt("Cuantos alumnos desea cargar?: "));
    alert("El promedio de las notas ingresadas es: " + promedio());
    break;

  case 2:
    let nombreAlumno = prompt("Ingrese el nombre del alumno: ");
    cantidad = parseFloat(prompt("Cuantos pruebas desea cargar?: "));
    let notaPromocion = promedio();

    if (notaPromocion >= 7) {
      alert(
        "El alumno: " +
          nombreAlumno +
          " obtuvo la promocion! con: " +
          notaPromocion
      );
    } else {
      alert(
        "El alumno: " +
          nombreAlumno +
          " no obtuvo la promocion :(\nSu nota final fue: " +
          notaPromocion
      );
    }
    break;

  default:
    alert("No existe la opcion ingresada!");
    break;
}

function promedio() {
  while (cantidad != cont) {
    nota = parseFloat(prompt("Ingrese Nota: "));
    suma = suma + nota;
    cont++;
  }
  let promedioNotas = suma / cont;
  return promedioNotas;
}
