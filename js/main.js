
"use strict";

// Esperamos a que el DOM esté preparado
$(document).ready(function() {

    // Comprobamos que jQuery funciona
    console.log("jQuery cargado correctamente");

    // Asociamos un evento al botón
    $("#boton").click(function() {
        $("#mensaje").text("¡Funciona jQuery!");
    });

});
