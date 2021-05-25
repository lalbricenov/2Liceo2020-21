let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    // console.log(color)
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 0;
let y = 200;
let r = 30;
let color = "red";

let vX = 10;// en px/s
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dX = dT/1000 *vX
    x = x + dX;
    // console.log(color)
    dibujarPelota(x, y, r, color);
}

function arrancarOParar(){
    if (vX > 0){
        vX = 0;
    }
    else{
        vX = 10;
    }
}
window.setInterval(moverYDibujar, dT);
// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.
window.onkeyup = function(event){
    // La función que se ejecuta cuando el evento ocurre puede recibir un argumento. Este argumento tiene los detalles del evento.
    // La función arrancarOParar se debe ejecutar únicamente si se levanta la tecla espacio.
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
    // cómo identificar cuál fue la tecla presionada?
}

function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}
window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, y el radio es ${r}`)
    // Si se hizo click sobre la pelota
    // Cambiar su color a uno aleatorio.
    cambiarColorPelota();
}

