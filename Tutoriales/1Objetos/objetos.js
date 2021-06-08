let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

let dT = 30;

// clase > Pelota
// propiedades: x, y, vX, vY, r, color
// metodos: dibujarse, moverse

class Pelota{
    constructor(xC, yC, r, color, vX, vY){
        this.xC = xC;
        this.yC = yC;
        this.r = r;
        this.color = color;
        this.vX = vX;
        this.vY = vY;
    }
    //no es necesario pasarle los datos a esta función
    dibujarse(){
        ctx.beginPath();
        ctx.strokeStyle = this.color
        ctx.fillStyle = this.color;
        // console.log(ctx.strokeStyle)
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    moverse(){
        let dX = dT/1000 * this.vX;
        let dY = dT/1000 * this.vY;
        this.xC = this.xC + dX;
        this.yC = this.yC + dY;
    }
}

//objeto
let pelota1 = new Pelota(0, 200, 20, "blue", 10, 0);
let pelota2 = new Pelota(0, 50, 30, "red", 5, 0);
let pelota3 = new Pelota(0, 100, 40, "blue", 30, 0);
let pelota4 = new Pelota(50, 400, 20, "green", 0, -10);
let pelota5 = new Pelota(0, 0, 20, "blue", 10, 10);

let pelotas = []
pelotas.push(pelota1, pelota2, pelota3, pelota4, pelota5);
function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    for(pelota of pelotas){
        pelota.moverse();
        pelota.dibujarse();
    }
    
    // console.log(color)
}

function arrancarOParar(){
    for(pelota of pelotas){
        if (pelota.vX > 0){
            pelota.vX = 0;
        }
        else{
            pelota.vX = 10;
        }
        if (pelota.vY > 0){
            pelota.vY = 0;
        }
        else{
            pelota.vY = 10;
        }
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
    for(pelota of pelotas){
        pelota.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}
window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    // Si se hizo click sobre la pelota
    // Cambiar su color a uno aleatorio.
    cambiarColorPelota();
}

