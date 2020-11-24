function saludar(nombre) {
  alert(`Hola ${nombre}, que tenga un buen día`);
}

saludar("Luis");

function correo(nombre) {
  // Separar el nombre en sus partes
  let partes = nombre.split(" ");
  if (partes.length == 4) {
    return (
      partes[0] +
      partes[1] +
      "." +
      partes[2] +
      partes[3][0] +
      "@gimnasiovolta.edu.co"
    );
  } else {
    return partes[0] + "." + partes[1] + partes[2][0] + "@gimnasiovolta.edu.co";
  }
}
