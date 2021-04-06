let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
ctx.fillStyle = "red"
ctx.strokeStyle = "blue"

// dibujo un rectángulo

ctx.fillRect(0, 0 , 100, 50)
ctx.lineWidth= 1
ctx.strokeRect(0,0,100, 50)


// debo iniciar un camino
ctx.beginPath()
ctx.rect(180, 160, 40, 80)
ctx.rect(280, 160, 40, 80)
ctx.stroke()
ctx.fill()
// ctx.endPath()

// camino compuesto de lineas rectas y curvas

ctx.beginPath()
ctx.moveTo(80, 320)// muevo el cursor a esa posicion
ctx.lineTo(200, 320)
ctx.arc(200, 360, 40, -Math.PI/2, Math.PI/2)
ctx.lineTo(140, 400)
ctx.stroke()
ctx.fill()
// ctx.endPath()