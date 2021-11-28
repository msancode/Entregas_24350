let start = parseFloat(
  prompt(
    "- Desea agregar alumnos y verlos? [1]\n- Desea saber quien posse la mejor nota? [2]\n- Salir [3]"
  )
);

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

let = largest = userInput = 0;
let bestName = "";
let listStudent = [];
listStudent.push(new Student("adan", 7));
listStudent.push(new Student("eva", 5));
listStudent.push(new Student("eme", 9));
listStudent.push(new Student("zeta", 3));

switch (start) {
  case 1:
    userInput = parseFloat(prompt("Cuantos alumnos desea cargar?: "));

    addStudent();

    for (const student of listStudent) {
      alert("nombre alumno: " + student.name + "\n" + "nota: " + student.score);
    }
    break;

  case 2:
    for (const student of listStudent) {
      if (student.score > largest) {
        largest = student.score;
        bestName = student.name;
      }
    }
    alert("alumno: " + bestName + "\n" + "nota: " + largest);

    break;

  case 3:
    alert("BYE BYE!");
    break;

  default:
    alert("No existe la opcion ingresada!");
    break;
}

function addStudent() {
  for (let i = 1; i <= userInput; i++) {
    listStudent.push(
      new Student(
        prompt("Ingrese el nombre: "),
        parseFloat(prompt("Ingrese la nota: "))
      )
    );
  }
}
