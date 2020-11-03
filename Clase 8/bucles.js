let total = 0;
let sumando = 1;
while (sumando <= 100) {
  console.log(`Total:${total}. Sumando ${sumando}`);
  total = total + sumando;
  sumando = sumando + 1;
}
console.log(`La suma es ${total}`);
// sumando*sumando
// Math.pow(sumando,2)
// Do while
// Para pedir input del usuario
let numero; // Creo la variable
do {
  numero = parseFloat(prompt("Ingrese un número")); //le asigno el valor a la variable
} while (isNaN(numero) || numero < 0);
// Se le pide de nuevo el número al usuario si no es un número o si es menor a cero
console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);
