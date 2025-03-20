
document.addEventListener('DOMContentLoaded', function() {

    // Cargar header1
    const header1 = document.getElementById('header1');
    if (header1) {
        header1.innerHTML =
        `
        <figure>
            <a href="index.html">
                <img src="images/logo.png" alt="logo colegio" width="599" height="214">
            </a>
        </figure>
                <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
                <nav class="nav" id="nav">
                    <button id="cerrar" class="cerrar-menu"><i class="bi bi-x"></i></button>
                    <ul>
                        <li class="principal no_marginal"> <a href="colegio/index.html">El Colegio
                            <p class="chevron"></p>
                        </a>
                        <span class="miniflecha bi bi-chevron-down"></span>
                            <ul class="children">
                                <li>
                                    <a href="colegio/features/historia.html">Historia</a>
                                </li>
                                <li>
                                    <a href="colegio/features/quienes.html">¿Quiénes somos?</a>
                                </li>
                                <li>
                                    <a href="colegio/features/organigrama.html">Organigrama</a>
                                </li>
                            </ul>
                        </li>
                        <li class="principal no_marginal" id="no_link">
                            Servicios
                                <p class="chevron"></p>
                                <span class="miniflecha bi bi-chevron-down"></span>
                            <ul class="children">
                                <li>
                                    <a href="servicios/features/residencia.html">Residencia</a>
                                </li>
                                <li>
                                    <a href="servicios/features/comedor.html">Comedor</a>
                                </li>
                                <li>
                                    <a href="servicios/features/cafeteria.html">Cafetería</a>
                                </li>
                                <li>
                                    <a href="servicios/features/transporte.html">Transporte</a>
                                </li>
                                <li>
                                    <a href="servicios/features/deportes.html">Deportes</a>
                                </li>
                            </ul>
                        </li>
                        <li class="principal no_marginal" id="no_link">
                            Oferta Académica
                                <p class="chevron"></p>
                                <span class="miniflecha bi bi-chevron-down"></span>
                            <ul class="children">
                                <li>
                                    <a href="oferta/features/infantil.html">Infantil</a>
                                </li>
                                <li>
                                    <a href="oferta/features/primaria.html">Primaria</a>
                                </li>
                                <li>
                                    <a href="oferta/features/secundaria.html">Secundaria</a>
                                </li>
                                <li>
                                    <a href="oferta/features/bachillerato.html">Bachillerato</a>
                                </li>
                                <li class="subprincipal">
                                    <a href="oferta/features/extraescolares/index.html">Actividades extraescolares</a>
                                    <span class="miniflecha bi bi-chevron-down"></span>
                                    <ul class="children">
                                        <li>
                                            <a href="oferta/features/extraescolares/features/conservatorio.html">Conservatorio</a>
                                        </li>
                                        <li>
                                            <a href="oferta/features/extraescolares/features/idiomas.html">Idiomas</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="oferta/features/intercambios.html">Intercambios</a>
                                </li>
                            </ul>
                        </li>
                        <li class="principal no_marginal" id="no_link">
                            Directorio
                                <p class="chevron"></p>
                                <span class="miniflecha bi bi-chevron-down"></span>
                            <ul class="children">
                                <li>
                                    <a href="directorio/features/docentes.html">Docentes</a>
                                </li>
                                <li>
                                    <a href="directorio/features/admin.html">Personal administrativo</a>
                                </li>
                            </ul>
                        </li>
                        <li class="principal no_marginal">
                            <a href="noticias/index.html">Noticias</a>
                        </li>
                        <li class="principal">
                            <a href="areaestu/index.html">Área del estudiante</a>
                        </li>
                    </ul>
                </nav>
        `;
    }

    // Cargar header2
    const header2 = document.getElementById('header2');
    if (header2) {
        header2.innerHTML =
        `
        <figure>
        <a href="index.html">
            <img src="../images/logo.png" alt="logo colegio" width="599" height="214">
        </a>
    </figure>
            <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
            <nav class="nav" id="nav">
                <button id="cerrar" class="cerrar-menu"><i class="bi bi-x"></i></button>
                <ul>
                    <li class="principal no_marginal"> <a href="../colegio/index.html">El Colegio
                        <p class="chevron"></p>
                    </a>
                    <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../colegio/features/historia.html">Historia</a>
                            </li>
                            <li>
                                <a href="../colegio/features/quienes.html">¿Quiénes somos?</a>
                            </li>
                            <li>
                                <a href="../colegio/features/organigrama.html">Organigrama</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Servicios
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../servicios/features/residencia.html">Residencia</a>
                            </li>
                            <li>
                                <a href="../servicios/features/comedor.html">Comedor</a>
                            </li>
                            <li>
                                <a href="../servicios/features/cafeteria.html">Cafetería</a>
                            </li>
                            <li>
                                <a href="../servicios/features/transporte.html">Transporte</a>
                            </li>
                            <li>
                                <a href="../servicios/features/deportes.html">Deportes</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Oferta Académica
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../oferta/features/infantil.html">Infantil</a>
                            </li>
                            <li>
                                <a href="../oferta/features/primaria.html">Primaria</a>
                            </li>
                            <li>
                                <a href="../oferta/features/secundaria.html">Secundaria</a>
                            </li>
                            <li>
                                <a href="../oferta/features/bachillerato.html">Bachillerato</a>
                            </li>
                            <li class="subprincipal">
                                <a href="../oferta/features/extraescolares/index.html">Actividades extraescolares</a>
                                <span class="miniflecha bi bi-chevron-down"></span>
                                <ul class="children">
                                    <li>
                                        <a href="../oferta/features/extraescolares/features/conservatorio.html">Conservatorio</a>
                                    </li>
                                    <li>
                                        <a href="../oferta/features/extraescolares/features/idiomas.html">Idiomas</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="../oferta/features/intercambios.html">Intercambios</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Directorio
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../directorio/features/docentes.html">Docentes</a>
                            </li>
                            <li>
                                <a href="../directorio/features/admin.html">Personal administrativo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal">
                        <a href="../noticias/index.html">Noticias</a>
                    </li>
                    <li class="principal">
                        <a href="../areaestu/index.html">Área del estudiante</a>
                    </li>
                </ul>
            </nav>
        `;
    }

    // Cargar header2
    const header3 = document.getElementById('header3');
    if (header3) {
        header3.innerHTML =
        `
        <figure>
        <a href="index.html">
            <img src="../../images/logo.png" alt="logo colegio" width="599" height="214">
        </a>
    </figure>
            <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>
            <nav class="nav" id="nav">
                <button id="cerrar" class="cerrar-menu"><i class="bi bi-x"></i></button>
                <ul>
                    <li class="principal no_marginal"> <a href="../../colegio/index.html">El Colegio
                        <p class="chevron"></p>
                    </a>
                    <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../../colegio/features/historia.html">Historia</a>
                            </li>
                            <li>
                                <a href="../../colegio/features/quienes.html">¿Quiénes somos?</a>
                            </li>
                            <li>
                                <a href="../../colegio/features/organigrama.html">Organigrama</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Servicios
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../../servicios/features/residencia.html">Residencia</a>
                            </li>
                            <li>
                                <a href="../../servicios/features/comedor.html">Comedor</a>
                            </li>
                            <li>
                                <a href="../../servicios/features/cafeteria.html">Cafetería</a>
                            </li>
                            <li>
                                <a href="../../servicios/features/transporte.html">Transporte</a>
                            </li>
                            <li>
                                <a href="../../servicios/features/deportes.html">Deportes</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Oferta Académica
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../../oferta/features/infantil.html">Infantil</a>
                            </li>
                            <li>
                                <a href="../../oferta/features/primaria.html">Primaria</a>
                            </li>
                            <li>
                                <a href="../../oferta/features/secundaria.html">Secundaria</a>
                            </li>
                            <li>
                                <a href="../../oferta/features/bachillerato.html">Bachillerato</a>
                            </li>
                            <li class="subprincipal">
                                <a href="../../oferta/features/extraescolares/index.html">Actividades extraescolares</a>
                                <span class="miniflecha bi bi-chevron-down"></span>
                                <ul class="children">
                                    <li>
                                        <a href="../../oferta/features/extraescolares/features/conservatorio.html">Conservatorio</a>
                                    </li>
                                    <li>
                                        <a href="../../oferta/features/extraescolares/features/idiomas.html">Idiomas</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="../../oferta/features/intercambios.html">Intercambios</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal" id="no_link">
                        Directorio
                            <p class="chevron"></p>
                            <span class="miniflecha bi bi-chevron-down"></span>
                        <ul class="children">
                            <li>
                                <a href="../../directorio/features/docentes.html">Docentes</a>
                            </li>
                            <li>
                                <a href="../../directorio/features/admin.html">Personal administrativo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="principal no_marginal">
                        <a href="../../noticias/index.html">Noticias</a>
                    </li>
                    <li class="principal">
                        <a href="../../areaestu/index.html">Área del estudiante</a>
                    </li>
                </ul>
            </nav>
        `;
    }

    // Cargar footer1


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

});









