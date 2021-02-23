localStorage.setItem("nombre", "Pedro")
let nombre = localStorage.getItem("nombre")

localStorage.setItem("edad", 15)
let edad = localStorage.getItem("edad")

console.log(edad + 5)

let edadCorrecta = parseInt(localStorage.getItem("edad"))

console.log(edadCorrecta + 5)

let notas = [6, 7, 5, 9, 10, 10, 9, 10];

localStorage.setItem("notasIncorrectas", notas);

let notasIncorrectasLeidas = localStorage.getItem("notasIncorrectas");


localStorage.setItem("notasCorrectas", JSON.stringify(notas));

let notasCorrectasLeidas = JSON.parse(localStorage.getItem("notasCorrectas"));

console.log(notas[3]);
