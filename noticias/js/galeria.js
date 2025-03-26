function mostrarSeccion(id) {
    // Ocultar todas las secciones
    $('.seccion').fadeOut(500); // Animación de desvanecimiento para ocultar todas las secciones

    // Mostrar la sección seleccionada con fadeIn
    $('#' + id).fadeIn(500); // Animación de desvanecimiento para mostrar la sección seleccionada
}

$(document).ready(function() {
    // Asignar el evento click a los enlaces
    $('.dropdown-item').on('click', function(e) {
        e.preventDefault();  // Prevenir el comportamiento por defecto del enlace
        var id = $(this).attr('href').replace('#', '');  // Obtener el ID del enlace
        mostrarSeccion(id);  // Llamar a la función para mostrar la sección
    });
});
