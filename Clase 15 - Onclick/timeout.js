// querySelector sirve para hacer referencia desde JS
// a los elementos de html
let boton2 = document.querySelector("#dislike")
let imagen = document.querySelector("img")
// onclick es un evento que ocurrecuando el usario hace click sobre un elemento, en este caso sobre el botón
boton2.onclick = cambiarAAzul

// los paréntesis () indican que la función no necesita ningún argumento para funcionar.
function cambiarAAzul(){
    // cambio el color a azul y luego de 3 segundos
    // lo cambio a negro
    boton2.style.color = "blue";
    imagen.style.display = "none"
    setTimeout(cambiarANegro, 3000);
}
function cambiarANegro(){
    // lo cambio a negro
    boton2.style.color = "black";
    imagen.style.display = "block"
}

boton2.style.color = "black";