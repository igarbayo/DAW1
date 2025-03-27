// Seleccionamos todos los h2 dentro de los artículos con clase 'desp'
const h2s = document.querySelectorAll('article.desp h2');

// Función para manejar la animación de visibilidad del div.texto
function toggleTextVisibility(h2) {
    return new Promise((resolve, reject) => {
        // Encuentra el artículo padre y el div.texto correspondiente
        const article = h2.closest('article.desp');
        const texto = article.querySelector('.texto');

        // Si el div.texto no está visible, lo mostramos
        if (!article.classList.contains('visible')) {
            article.classList.add('visible');
            // Espera la duración de la animación antes de resolver la promesa
            setTimeout(() => resolve('Texto visible'), 500); // 500ms coinciden con la duración de la transición
        } else {
            article.classList.remove('visible');
            setTimeout(() => resolve('Texto oculto'), 500); // 500ms para la animación de ocultación
        }
    });
}

// Asignamos el evento a cada h2 dentro de los artículos con clase 'desp'
h2s.forEach(h2 => {
    h2.addEventListener('click', () => {
        toggleTextVisibility(h2)
            .then(message => {
                console.log(message); // Imprime el estado de visibilidad
            })
            .catch(error => {
                console.error(error);
            });
    });
});
