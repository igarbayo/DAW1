document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        fecha: document.getElementById("fecha").value,
        ciclo: document.querySelector('input[name="ciclo"]:checked') ? document.querySelector('input[name="ciclo"]:checked').value : 'No seleccionado',
        aceptar_correos: document.querySelector('input[name="aceptar_correos"]').checked
    };

    // Llamamos al callback para mostrar los datos
    mostrarResumen(datos, function(resumen) {
        document.getElementById("resumen").innerHTML = resumen;
    });
});

// Callback para generar el resumen
function mostrarResumen(datos, callback) {
    const resumen = `
        <h3>Resumen de la solicitud</h3>
        <p><strong>Nombre:</strong> ${datos.nombre} ${datos.apellidos}</p>
        <p><strong>Correo electrónico:</strong> ${datos.correo}</p>
        <p><strong>Número de teléfono:</strong> ${datos.telefono}</p>
        <p><strong>Fecha de preferencia:</strong> ${datos.fecha}</p>
        <p><strong>Ciclo educativo:</strong> ${datos.ciclo}</p>
        <p><strong>Acepta correos:</strong> ${datos.aceptar_correos ? "Sí" : "No"}</p>
    `;
    // Ejecutamos el callback con el resumen
    callback(resumen);
}
