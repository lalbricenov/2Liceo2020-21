let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")
let dT = 30;

// CLASES: molde para crear objetos
// propiedades: xC, yC, vX, vY, r, color
// metodos: moverse, dibujarse
class Pelota{
    constructor(xC, yC, vX, vY, r, color){
        this.xC = xC;// la coordenada x del centro de ESTA pelota
        this.yC = yC;
        this.vX = vX;
        this.vY = vY;
        this.r  = r;
        this.color = color;
    }
    moverse(){
        let dX = dT/1000 *this.vX;
        let dY = dT/1000 *this.vY;
        this.xC = this.xC + dX;
        this.yC = this.yC + dY;
    }
    dibujarse(){
        ctx.beginPath();
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color;
        // console.log(ctx.strokeStyle)
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }
}

// Utilizo la clase (el molde) Pelota para crear una pelota
let pelota1 = new Pelota(0, 0, 10, 10, 15, "green");
let pelota2 = new Pelota(0, 400, 10, -10, 30, "red");
let pelota3 = new Pelota(400,300,-10,0,20,"blue");
let pelota4 = new Pelota(0, 0, 10, 10, 15, "green");

//Array de pelotas

let pelotas = []
//Voy a crear una pelota cada segundo
function crearPelota(){
    let x = 600;
    let y = 200;
    let vX = -20;
    let vY = 20*Math.random() - 10;
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    let pelotaNueva = new Pelota(x, y, vX, vY, 20, color);

    //añado la nueva pelota al array de pelotas
    pelotas.push(pelotaNueva);
}   

window.setInterval(crearPelota, 1000);

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    for (pelota of pelotas){
        pelota.moverse();
        pelota.dibujarse();
    }
}

function detenerPelotas(){
    for (pelota of pelotas){
       pelota.vX = 0;
       pelota.vY = 0;
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
        detenerPelotas();
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

