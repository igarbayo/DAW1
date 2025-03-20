const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Manejador para el menú principal
document.querySelectorAll(".principal").forEach(element => {
    element.addEventListener("click", function() {
        // Cerrar todos los demás menús
        document.querySelectorAll(".principal .children").forEach(submenu => {
            if (submenu !== this.querySelector(".children")) {
                submenu.style.display = "none";
            }
        });

        // Alternar la visibilidad del menú actual
        const submenu = this.querySelector(".children");
        if (submenu) {
            submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
        }
    });
});

// Manejador para el submenú, evitando que afecte al menú principal
document.querySelectorAll(".subprincipal").forEach(element => {
    element.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic en el submenú cierre el menú principal
        const submenu = this.querySelector(".children");
        if (submenu) {
            submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
        }
    });
});
