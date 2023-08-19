

// aca obtenemos todos los elementos de registro
const formulario = document.getElementById("f2");
// este f2 es un atribito y sive para identificar el formulario y enviar los datos a la base de datos "es una vantana emergente"
const nombre = document.getElementById("txtnombre");
const apellido = document.getElementById("txtapellido");
const correo = document.getElementById("txtcorreo");
const contraseña = document.getElementById("txtcontraseña");
const boton = document.getElementById("boton");

// Agregar evento submit al formulario esto sirve para ejecutar una funcion 
formulario.addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    // Validar los datos del usuario con base de datos
    if (nombre.value === "" || apellido.value === "" || correo.value === "" || contraseña.value === "") {
        alert("Debes llenar todos los campos");
        return;
    }

    
    // cuando te registres te saldra una ventana emergente
    alert("Te has registrado correctamente");

    // Limpiar los campos del formulario esto ya es con la base de datos
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    contraseña.value = "";
});
