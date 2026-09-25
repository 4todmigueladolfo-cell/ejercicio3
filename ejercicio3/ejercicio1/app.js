let cantidad = Number(prompt("¿Cuántos estudiantes desea registrar?"));
let aprobados = 0;
let reprobados = 0;
let sumaCalificaciones = 0;
let notaMasAlta = -Infinity;
let notaMasBaja = Infinity;

for (let i = 1; i <= cantidad; i++) {
  let calificacion = Number(prompt("Calificación del estudiante " + i + " (0-100):"));
  while (calificacion < 0 || calificacion > 100) {
    calificacion = Number(prompt("Valor inválido. Ingrese una calificación entre 0 y 100:"));
  }
  if (calificacion >= 60) {
    aprobados++;
  } else {
    reprobados++;
  }
  sumaCalificaciones += calificacion;
  if (calificacion > notaMasAlta) notaMasAlta = calificacion;
  if (calificacion < notaMasBaja) notaMasBaja = calificacion;
}

let promedio = sumaCalificaciones / cantidad;

document.write("<h3>Resultados</h3>");
document.write("Cantidad total de estudiantes: " + cantidad + "<br>");
document.write("Estudiantes aprobados: " + aprobados + "<br>");
document.write("Estudiantes reprobados: " + reprobados + "<br>");
document.write("Promedio general del grupo: " +promedio.toFixed(2)+ "<br>");
document.write("Calificación más alta: " + notaMasAlta + "<br>");
document.write("Calificación más baja: " + notaMasBaja + "<br>");