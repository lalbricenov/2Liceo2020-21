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

//Si se trata de leer una variable que no existe en el localStorage
// como resultado se obtiene null
 let miVariable = localStorage.getItem("notaz");
 console.log(miVariable);

 // Si la variable no existe se muestra un mensaje en la consola y 
 // se crea la variable en el localstorage para que la próxima vez 
 // que se visite la página sí exista.
 if(miVariable == null){
     console.log('La variable notaz no existe en el localStorage')
     console.log('Ahora voy a crear la variable');
     localStorage.setItem("notaz", JSON.stringify([1, 3, 4,9, 7,8]))
 }
 else{
     console.log("La variable si existe")
 }

