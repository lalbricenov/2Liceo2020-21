// Version con bucles
function factorialBucles(n) {
  let resultado = 1;
  let factor = 2;
  while (factor <= n) {
    resultado = resultado * factor;
    factor = factor + 1;
  }
  return resultado;
}

function factorial(n) {
  // Version recursiva de la funcion factorial
  // Si n es menor o igual a 1 el resultado es inmediato
  if (n <= 1) return 1;
  else {
    // Se debe llamar al factorial del numero anterior
    console.log(`Calculando ${n} * factorial(${n - 1})`);
    return n * factorial(n - 1);
  }
}

// function areaCirc(r)
// {
//     return aksdjf;kalsjfak
// }
