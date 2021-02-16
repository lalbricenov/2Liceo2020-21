// Lista de planetas y sus imágenes- Lista de objetos.
let planetas = [
    {nombre:"Mercurio", diametro:4879,imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg"},
    {nombre:"Venus", diametro:12104,imagen:"https://ichef.bbci.co.uk/news/640/cpsprodpb/CEAA/production/_114360925_jaxa-isas-akatsuki-project-team.jpg"},
    {nombre:"Tierra", diametro:12756,imagen:"https://dam.ngenespanol.com/wp-content/uploads/2019/05/Tierra-Espacio.png"},
    {nombre:"Marte", diametro:6792,imagen:"https://i.blogs.es/0585c9/marte8k/1366_2000.jpg "},
    {nombre:"Júpiter", diametro:142984,imagen:"https://www.ecestaticos.com/image/clipping/d0d127b5b80c69905e744d76a836d4c8/un-planeta-doble-que-no-se-ve-desde-la-edad-media-el-fenomeno-unico-de-jupiter-y-saturno.jpg"},
    {nombre:"Saturno", diametro:120536,imagen: "https://www.rcinet.ca/es/wp-content/uploads/sites/4/2020/12/saturno-635x357.jpg"},
    {nombre:"Urano", diametro:51118,imagen:"https://www.astrobio.net/images/galleryimages_images/Gallery_Image_8386.jpg"},
    {nombre:"Neptuno", diametro: 49528, imagen:"https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"}
]
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
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "urlImagen"
    let urlNuevo = document.querySelector("input[name=urlImagen]").value
    
    // con los datos ingresados por el usuario voy a añadir un planeta a la lista de planetas
    
    // crear el planeta nuevo
    let planetaNuevo = {nombre:nombreNuevo, diametro:diametroNuevo, imagen:urlNuevo}
    console.log("Ahora voy a añadir el siguiente planeta");
    console.log(planetaNuevo)

    // añado el planeta a la lista
    planetas.push(planetaNuevo)

    // generar de nuevo la tabla
    llenarTabla();
    // return false hace que no se actualice la página.
    return false;
}

form.onsubmit = addPlanet;

// Para borrar un planeta
let formBorrar = document.querySelector("#formularioDelete");

function deletePlanet(){
    // Objeto de tipo input, que tenga una propiedad llamada name y un valor
    // de esa propiedad igual a "nombre"
    let nombrePlanetaABorrar = document.querySelector("#formularioDelete input[name=nombre]").value
    
    // crear el planeta nuevo
    console.log("Ahora voy a borrar el siguiente planeta");
    console.log(nombrePlanetaABorrar)
    
    // Determinar la posición del elemento a borrar en el array
    // find, findIndex
    // console.log(planetas.find(planeta => planeta.nombre == nombrePlanetaABorrar));
    let aBorrar = planetas.findIndex(planeta => planeta.nombre == nombrePlanetaABorrar);
    // si el elemento no existe mostrarle un mensaje al usuario
    if(aBorrar == -1) alert("Planeta no encontrado");
    // Borrar el elemento del array
    // en la posición aBorrar deseo borrar 1 elemento
    planetas.splice(aBorrar, 1);
    // generar de nuevo la tabla
    llenarTabla();
    // return false hace que no se actualice la página.
    return false;
}
formBorrar.onsubmit = deletePlanet;

llenarTabla();