let nota = {numero:7.5, peso:0.3, nombre:"Divina comedia", materia:"Italiano", indicador:"Oral", fecha:"24-dic-2020"}
console.log(nota.numero)
// pasó?
if(nota.numero>=6) console.log("Sí");else console.log("No");
console.log(nota.indicador)


let nota2 = {numero:6.5, peso:0.4, nombre:"Ensayo", materia:"Italiano", indicador:"Escrito", fecha:"25-dic-2020"}
let nota3 = {numero:8.5, peso:0.4, nombre:"Ensayo 2", materia:"Italiano", indicador:"Escrito", fecha:"31-dic-2020"}

let notas = [nota, nota2, nota3]
// notas es un array de objetos
console.log(notas)

let david = {nombre:"David Plazas", edad:12, curso:"2 Liceo", notas:notas}

console.log(david.notas[1].peso)

let juan = {nombre:"Juan Plazas", edad:15, curso:"2 Liceo", resultados:notas}
console.log(juan.resultados)
// La línea siguiente genera un error porque dentro del objeto juan el nombre de la propiedad es "resultados", no "notas"
console.log(juan.notas)