function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(id).style.display = 'block';
}