// Leo la variable planetas del almacenamiento local
// y si existe la creo

let planetas = JSON.parse(localStorage.getItem("planetas"));
if (planetas == null) planetas = [];


// Creo una variable que haga referencia a la tabla
// QuerySelector selecciona un elemento del html, usando los selectores de css.
let tabla = document.querySelector('#planetas')
// console.log(tabla)
function llenarTabla(){
    // Voy a llenar la tabla añadiendo las filas necesarias
    let contenidoTabla = '<tr><th>Nombre</th><th>Diámetro</th><th>Imagen</th></tr>'
    for (planeta of planetas){
        contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.diametro}</td>
        <td><img width="500px" src="${planeta.imagen}" alt=""></td></tr>`
    }
    // A la tabla le asigno el contenido que creamos
    tabla.innerHTML = contenidoTabla;
}

// variable que corresponde al formulario.
let form = document.querySelector("#formularioAdd");

function addPlanet(){
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "nombre"
    let nombreNuevo = document.querySelector("input[name=nombre]").value
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "diametro"
    let diametroNuevo = parseFloat(document.querySelector("input[name=diametro]").value)
    // Objeto de tipo input, que tenga una propiedad llamada name  y un valor
    // de esa propiedad igual a "urlImagen"
    let urlNuevo = document.querySelector("input[name=urlImagen]").value
    
    // con los datos ingresados por el usuario voy a añadir un planeta a la lista de planetas
    
    // crear el planeta nuevo
    let planetaNuevo = {nombre:nombreNuevo, diametro:diametroNuevo, imagen:urlNuevo}
    console.log("Ahora voy a añadir el siguiente planeta");
    console.log(planetaNuevo)

    // añado el planeta a la lista
    planetas.push(planetaNuevo)
    
    // Guardo la lista de planetas en el almacenamiento local
    localStorage.setItem("planetas", JSON.stringify(planetas));
    // planetas[2]

    // generar de nuevo la tabla
    // llenarTabla es una función, para ejecutarla debo pasarle los 
    // parámetros que necesite. En este caso no necesita ninguno, por 
    // eso los paréntesis están vacíos.
    llenarTabla();
    // return false hace que no se actualice la página.
    // return false;
    // puedo quitar el return false porque no hay problema si la página se recarga
}

form.onsubmit = addPlanet;

// // Para borrar un planeta
// let formBorrar = document.querySelector("#formularioDelete");

// function deletePlanet(){
//     // Objeto de tipo input, que tenga una propiedad llamada name y un valor
//     // de esa propiedad igual a "nombre"
//     let nombrePlanetaABorrar = document.querySelector("#formularioDelete input[name=nombre]").value
    
//     // crear el planeta nuevo
//     console.log("Ahora voy a borrar el siguiente planeta");
//     console.log(nombrePlanetaABorrar)
    
//     // Determinar la posición del elemento a borrar en el array
//     // find, findIndex
//     // console.log(planetas.find(planeta => planeta.nombre == nombrePlanetaABorrar));
//     let aBorrar = planetas.findIndex(planeta => planeta.nombre == nombrePlanetaABorrar);
//     // si el elemento no existe mostrarle un mensaje al usuario
//     if(aBorrar == -1) alert("Planeta no encontrado");
//     // Borrar el elemento del array
//     // en la posición aBorrar deseo borrar 1 elemento
//     planetas.splice(aBorrar, 1);
//     // generar de nuevo la tabla
//     llenarTabla();
//     // return false hace que no se actualice la página.
//     return false;
// }
// formBorrar.onsubmit = deletePlanet;

llenarTabla();