function animarImagenes() {
    // Obtener todas las imágenes con la clase 'animadaizq'
    const imagenesizq = document.querySelectorAll(".animadaizq");
    // Recorrer cada imagen y agregar la clase 'animar'
    imagenesizq.forEach(imagen => {
      imagen.classList.add("animar");
    });
  
    // Obtener todas las imágenes con la clase 'animadader'
    const imagenesder = document.querySelectorAll(".animadader");
    // Recorrer cada imagen y agregar la clase 'animar'
    imagenesder.forEach(imagen => {
      imagen.classList.add("animar");
    });
  }

// Llamamos a la función cuando la página haya cargado
window.onload = () => {
    animarImagenes();  // Llamamos a la función para animar las imágenes
};