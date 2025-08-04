// Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
 let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad >= 18) {
  if (nombre === "Mario" || nombre === "Carlos") {
    alert("Puedes ingresar a la discoteca y eres VIP ");
  } else {
    alert("Puedes ingresar a la discoteca ");
  }
} else {
  alert("No puedes ingresar a la discoteca ");
}