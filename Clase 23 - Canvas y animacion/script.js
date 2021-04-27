let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
// ctx.fillStyle = "red"
// ctx.strokeStyle = "blue"

// creo una función que recibe las coordenadas del centro,
// y el radio, y dibuja un cuadrado circunscrito en un circulo
function dibujarBoton(xC, yC, r){
    // dibujo el circulo
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    // dibujo el cuadrado
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.strokeRect(xC-r, yC-r, 2*r, 2*r);
}

// function nombreFuncion ( parámetros o argumentos )
function dibujarLapiz(x, y, w, h, colorPunta){
    // cuerpo de la función
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.lineWidth= 1
    ctx.fillRect(x,y, w, h/2)
    ctx.strokeRect(x,y,w, h/2)
    ctx.fillRect(x,y+h/2, w, h/2)
    ctx.strokeRect(x,y+h/2,w,h/2)
    ctx.fillStyle = "gray"
    ctx.fillRect(x-5,y,5,h)
    ctx.strokeRect(x-5,y,5,h)
    ctx.fillStyle = "orange"
    ctx.beginPath()
    ctx.moveTo(x+w, y)
    ctx.lineTo(x+w+h, y+h/2)
    ctx.lineTo(x+w, y+h)
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = colorPunta
    ctx.beginPath()
    ctx.moveTo(x+w+2*h/3, y+h/2-h/6)
    ctx.lineTo(x+w+h, y+h/2)
    ctx.lineTo(x+w+2*h/3, y+h/2+h/6)
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(x-5, y+h/2, h/2, Math.PI/2, -Math.PI/2)
    ctx.stroke()
    ctx.fill()
}


// Utilizo la función, y entre paréntesis paso a ella los
// parámetros.
// Voy a hacer un lapiz que se mueva a 10 pixeles por segundo hacia la derecha

// cada 30 milisegundos se debe hacer esto:
// borrar todo
// cambiar la posicion x del lapiz
// dibujar el lapiz

let x = 0;// La coordenada x del lapiz
let y = 200;
let vX = 60; // en px/s
let dT = 30; // en milisegundos
function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dX = (dT/1000) * vX;// desplazamiento
    x = x + dX;// se cambia el valor de la x
    y = 200+100*Math.sin(x*Math.PI/180)
    dibujarLapiz(x, y, 50, 60,"black");
}

// La funcion se debe ejecuar cada dT milisegundos
window.setInterval(moverYDibujar, dT);

