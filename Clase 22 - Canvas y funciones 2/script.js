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
// parámetros. En este caso no le paso ninguno.
dibujarLapiz(250, 150, 50, 60,"blue")
// dibujarLapiz(250, 190,80, 20, "blue")
// dibujarLapiz(250, 240,150, 10, "pink")


// dibujarBoton(20, 20, 5)
// dibujarBoton(320, 220, 5)
// dibujarBoton(350, 50, 40)
// dibujarBoton(80, 200, 70)
// for(let x = 0; x < 400; x= x+30){
//     dibujarBoton(x, Math.pow(x-200, 2) / 100, 20)
// }

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