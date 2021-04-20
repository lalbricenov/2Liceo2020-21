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

// dibujarBoton(20, 20, 5)
// dibujarBoton(320, 220, 5)
// dibujarBoton(350, 50, 40)
// dibujarBoton(80, 200, 70)
for(let x = 0; x < 400; x= x+30){
    dibujarBoton(x, Math.pow(x-200, 2) / 100, 20)
}

// ctx.beginPath()
// ctx.fillStyle = 'pink'
// ctx.moveTo(200, 200)
// ctx.lineTo(250, 200)
// ctx.lineTo(250, 250)
// ctx.lineTo(200, 250)
// ctx.lineTo(200, 200)
// ctx.stroke()
// ctx.fill()
// dibujo un rectángulo

// ctx.fillRect(0, 0 , 100, 50)
// ctx.lineWidth= 1
// ctx.strokeRect(0,0,100, 50)


// // debo iniciar un camino
// ctx.beginPath()
// ctx.rect(180, 160, 40, 80)
// ctx.rect(280, 160, 40, 80)
// ctx.stroke()
// ctx.fill()
// // ctx.endPath()

// // camino compuesto de lineas rectas y curvas

// ctx.fillStyle = "green"
// ctx.beginPath()
// ctx.moveTo(80, 320)// muevo el cursor a esa posicion
// ctx.lineTo(200, 320)
// ctx.arc(200, 360, 40, -Math.PI/2, Math.PI/2)
// // ctx.lineTo(140, 400)
// ctx.stroke()
// ctx.fill()
// // ctx.endPath()