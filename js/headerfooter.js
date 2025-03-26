
function loadHeader(elementId, pathPrefix = "") {
    const header = document.getElementById(elementId);
    if (header) {
        header.innerHTML = `
        <figure>
            <a href="${pathPrefix}index.html">
                <img src="${pathPrefix}images/logo.png" alt="logo colegio" width="599" height="214">
            </a>
        </figure>
        <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
        <nav class="nav" id="nav">
            <button id="cerrar" class="cerrar-menu"><i class="bi bi-x"></i></button>
            <ul>
                <li class="principal no_marginal">
                    <a href="${pathPrefix}colegio/index.html">El Colegio <p class="chevron"></p></a>
                    <span class="miniflecha bi bi-chevron-down"></span>
                    <ul class="children">
                        <li><a href="${pathPrefix}colegio/features/historia.html">Historia</a></li>
                        <li><a href="${pathPrefix}colegio/features/quienes.html">¿Quiénes somos?</a></li>
                        <li><a href="${pathPrefix}colegio/features/organigrama.html">Organigrama</a></li>
                    </ul>
                </li>
                <li class="principal no_marginal" id="no_link">
                    Servicios <p class="chevron"></p> <span class="miniflecha bi bi-chevron-down"></span>
                    <ul class="children">
                        <li><a href="${pathPrefix}servicios/features/residencia.html">Residencia</a></li>
                        <li><a href="${pathPrefix}servicios/features/comedor.html">Comedor</a></li>
                        <li><a href="${pathPrefix}servicios/features/cafeteria.html">Cafetería</a></li>
                        <li><a href="${pathPrefix}servicios/features/transporte.html">Transporte</a></li>
                        <li><a href="${pathPrefix}servicios/features/deportes.html">Deportes</a></li>
                    </ul>
                </li>
                <li class="principal no_marginal" id="no_link">
                    Oferta Académica <p class="chevron"></p> <span class="miniflecha bi bi-chevron-down"></span>
                    <ul class="children">
                        <li><a href="${pathPrefix}oferta/features/infantil.html">Infantil</a></li>
                        <li><a href="${pathPrefix}oferta/features/primaria.html">Primaria</a></li>
                        <li><a href="${pathPrefix}oferta/features/secundaria.html">Secundaria</a></li>
                        <li><a href="${pathPrefix}oferta/features/bachillerato.html">Bachillerato</a></li>
                        <li class="subprincipal">
                            <a href="${pathPrefix}oferta/features/extraescolares/index.html">Actividades extraescolares</a>
                            <span class="miniflecha bi bi-chevron-down"></span>
                            <ul class="children">
                                <li><a href="${pathPrefix}oferta/features/extraescolares/features/conservatorio.html">Conservatorio</a></li>
                                <li><a href="${pathPrefix}oferta/features/extraescolares/features/idiomas.html">Idiomas</a></li>
                            </ul>
                        </li>
                        <li><a href="${pathPrefix}oferta/features/intercambios.html">Intercambios</a></li>
                    </ul>
                </li>
                <li class="principal no_marginal" id="no_link">
                    Directorio <p class="chevron"></p> <span class="miniflecha bi bi-chevron-down"></span>
                    <ul class="children">
                        <li><a href="${pathPrefix}directorio/features/docentes.html">Docentes</a></li>
                        <li><a href="${pathPrefix}directorio/features/admin.html">Personal administrativo</a></li>
                    </ul>
                </li>
                <li class="principal no_marginal"><a href="${pathPrefix}noticias/index.html">Noticias</a></li>
                <li class="principal"><a href="${pathPrefix}areaestu/index.html">Área del estudiante</a></li>
            </ul>
        </nav>
        `;
    }
}

function loadFooter(elementId, pathPrefix = "") {
    const footer = document.getElementById(elementId);
    if (footer) {
        footer.innerHTML = `
            <p id="direccion1">Avenida de los Abetos, s/n, 15701</p>
            <p id="direccion2">Santiago de Compostela, A Coruña</p>
            <p id="direccion3">900 10 20 30</p>
            <figure class="rrss" id="rrss1">
                <a href="https://x.com/universidadeusc?lang=es">
                    <img src="${pathPrefix}images/x.png" alt="x" width="166" height="166">
                </a>
            </figure>
            <figure class="rrss" id="rrss2">
                <a href="https://www.facebook.com/UniversidadeUSC/?locale=es_ES">
                    <img src="${pathPrefix}images/facebook.png" alt="facebook" width="166" height="166">
                </a>
            </figure>
            <figure class="rrss" id="rrss3">
                <a href="https://www.instagram.com/universidade_usc/?hl=es">
                    <img src="${pathPrefix}images/instagram.png" alt="instagram" width="166" height="166">
                </a>
            </figure>
            <figure class="rrss" id="rrss4">
                <a href="https://www.youtube.com/channel/UCnHP-7XEnu4bm7ADxmRKK9A">
                    <img src="${pathPrefix}images/youtube.png" alt="youtube" width="166" height="166">
                </a>
            </figure>
            <figure id="logosmall">
                <a href="${pathPrefix}index.html">
                    <img id="imglogosmall" src="${pathPrefix}images/logosmall.png" alt="logo colegio" width="293" height="267">
                </a>
            </figure>
            <ul>
                <li><a href="${pathPrefix}documents/privacidad.pdf">Privacidad</a></li>
                <li><a href="${pathPrefix}features/ayuda.html">Ayuda</a></li>
                <li><a href="${pathPrefix}features/contacto.html">Contacto</a></li>
                <li><a href="${pathPrefix}features/acerca.html">Acerca de la web</a></li>
            </ul>

            <!-- Botón de Scroll to Top -->
            <button id="scrollToTop" class="btn btn-primary rounded-circle p-3">
                <i class="bi bi-chevron-up"></i>
            </button>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Cargar headers
    loadHeader('header1', '');
    loadHeader('header2', '../');
    loadHeader('header3', '../../');
    loadHeader('header4', '../../../');
    loadHeader('header5', '../../../../');

    // Cargar footers
    loadFooter('footer1', '');
    loadFooter('footer2', '../');
    loadFooter('footer3', '../../');
    loadFooter('footer4', '../../../');
    loadFooter('footer5', '../../../../');

    // Crear menú nav
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    function ejecutarFuncionParaAnchoPantalla() {
        const anchoPantalla = window.innerWidth;
        if (anchoPantalla < 992) {
            abrir.addEventListener("click", () => {
                nav.classList.add("visible");
            })
        
            cerrar.addEventListener("click", () => {
                nav.classList.remove("visible");
            })
        
            // Manejador para el menú principal
            document.querySelectorAll(".principal").forEach(element => {
                element.addEventListener("click", function() {
                    // Cerrar todos los demás submenús y actualizar las flechas
                    document.querySelectorAll(".principal").forEach(principal => {
                        const submenu = principal.querySelector(".children");
                        const icon = principal.querySelector(".miniflecha");
                        if (submenu && submenu !== this.querySelector(".children")) {
                            submenu.style.display = "none"; // Ocultar submenú
                            if (icon) {
                                icon.classList.remove('bi-chevron-up');
                                icon.classList.add('bi-chevron-down'); // Restablecer flecha a abajo
                            }
                        }
                    });
        
                    // Alternar la visibilidad del submenú actual
                    const submenu = this.querySelector(".children");
                    const icon = this.querySelector(".miniflecha");
                    if (submenu) {
                        // Alternar la visibilidad del submenú
                        submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
        
                        // Alternar las clases del ícono de la flecha
                        if (submenu.style.display === "block") {
                            // Si el submenú está visible, cambiar el ícono a Chevron Up
                            if (icon) {
                                icon.classList.remove('bi-chevron-down');
                                icon.classList.add('bi-chevron-up');
                            }
                        } else {
                            // Si el submenú está oculto, cambiar el ícono a Chevron Down
                            if (icon) {
                                icon.classList.remove('bi-chevron-up');
                                icon.classList.add('bi-chevron-down');
                            }
                        }
                    }
                });
            });
        
        
            // Manejador para el submenú, evitando que afecte al menú principal
            document.querySelectorAll(".subprincipal").forEach(element => {
                element.addEventListener("click", function(event) {
                    event.stopPropagation(); // Evita que el clic en el submenú cierre el menú principal
                    const submenu = this.querySelector(".children");
                    const icon = this.querySelector(".miniflecha");
                    if (submenu) {
                        submenu.style.display = submenu.style.display === "none" || submenu.style.display === "" ? "block" : "none";
                    
                        // Alternar las clases del ícono de la flecha
                        if (submenu.style.display === "block") {
                            // Si el submenú está visible, cambiar el ícono a Chevron Up
                            if (icon) {
                                icon.classList.remove('bi-chevron-down');
                                icon.classList.add('bi-chevron-up');
                            }
                        } else {
                            // Si el submenú está oculto, cambiar el ícono a Chevron Down
                            if (icon) {
                                icon.classList.remove('bi-chevron-up');
                                icon.classList.add('bi-chevron-down');
                            }
                        }
                    }
                });
            });
        }
    }

    // Llamamos la función inicialmente para comprobar el tamaño de la ventana al cargar la página
    ejecutarFuncionParaAnchoPantalla();

    // Escuchamos el evento 'resize' para que se ejecute la función cada vez que cambie el tamaño de la ventana
    window.addEventListener('resize', ejecutarFuncionParaAnchoPantalla);

    const scrollToTop = document.getElementById("scrollToTop");

    window.onscroll = function () {
      if (document.documentElement.scrollTop > 300) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    };

    scrollToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

});









