function mostrarSeccion(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(id).style.display = 'block';
}

document.getElementsByClassName("ciencias-link")[0].addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    mostrarSeccion("ciencias");
});

const enlaces = document.getElementsByTagName("a");

for (let enlace of enlaces) {
    if (enlace.textContent.trim() === "Idiomas") {
        enlace.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            mostrarSeccion("idiomas");
        });
        break; // Salimos del bucle una vez que encontramos el enlace correcto
    }
}

const enlacehum = document.getElementsByName("humanidades-link");

if (enlacehum.length > 0) {
    enlacehum[0].addEventListener("click", function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        mostrarSeccion("humanidades");
    });
}

const links = document.links;

for (let link of links) {
    if (link.textContent.trim() === "Tecnología") {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            mostrarSeccion("tecnologia");
        });
        break; // Salimos del bucle una vez que encontramos el enlace correcto
    }
}

document.querySelector(".artes-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    mostrarSeccion("artes");
});



