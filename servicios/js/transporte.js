document.addEventListener('DOMContentLoaded', function() {
    // Cargar horarios para ambas líneas
    cargarHorarios('lineaA', 'tabla-lineaA', 'loading-lineaA', 'horarios_lineaA.xml');
    cargarHorarios('lineaB', 'tabla-lineaB', 'loading-lineaB', 'horarios_lineaB.xml');
});

function cargarHorarios(lineaId, tablaId, loadingId, xmlFile) {
    const loadingElement = document.getElementById(loadingId);
    const tablaElement = document.getElementById(tablaId);
    
    // Mostrar el indicador de carga
    loadingElement.style.display = 'flex';
    tablaElement.style.display = 'none';
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `../data/${xmlFile}`, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // Parsear el XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
                
                // Construir la tabla
                construirTabla(xmlDoc, tablaElement, lineaId);
                
                // Ocultar el indicador de carga y mostrar la tabla
                loadingElement.style.display = 'none';
                tablaElement.style.display = 'table';
                
                // Añadir efecto de aparición
                tablaElement.style.opacity = '0';
                setTimeout(() => {
                    tablaElement.style.transition = 'opacity 0.5s ease-in';
                    tablaElement.style.opacity = '1';
                }, 100);
            } else {
                // Manejar error
                loadingElement.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <i class="bi bi-exclamation-triangle-fill"></i> Error al cargar los horarios. Por favor, inténtelo de nuevo más tarde.
                    </div>
                `;
                console.error(`Error al cargar ${xmlFile}:`, xhr.statusText);
            }
        }
    };
    
    // Manejar errores de red
    xhr.onerror = function() {
        loadingElement.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <i class="bi bi-exclamation-triangle-fill"></i> Error de conexión. Por favor, verifique su conexión a internet.
            </div>
        `;
    };
    
    // Configurar timeout (5 segundos)
    xhr.timeout = 5000;
    xhr.ontimeout = function() {
        loadingElement.innerHTML = `
            <div class="alert alert-warning" role="alert">
                <i class="bi bi-clock-history"></i> La carga está tardando más de lo esperado. Por favor, espere...
            </div>
        `;
    };
    
    xhr.send();
}

function construirTabla(xmlDoc, tablaElement, lineaId) {
    // Limpiar tabla existente
    tablaElement.innerHTML = '';
    
    // Crear encabezados de tabla según la línea
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    // Añadir columna Turno
    const thTurno = document.createElement('th');
    thTurno.textContent = 'Turno';
    headerRow.appendChild(thTurno);
    
    // Obtener paradas desde el XML
    const paradas = xmlDoc.getElementsByTagName('parada');
    for (let i = 0; i < paradas.length; i++) {
        const nombreParada = paradas[i].getAttribute('nombre');
        const th = document.createElement('th');
        th.textContent = nombreParada;
        headerRow.appendChild(th);
    }
    
    thead.appendChild(headerRow);
    tablaElement.appendChild(thead);
    
    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    
    // Obtener horarios desde el XML
    const horarios = xmlDoc.getElementsByTagName('horario');
    for (let i = 0; i < horarios.length; i++) {
        const turno = horarios[i].getAttribute('turno');
        const row = document.createElement('tr');
        
        // Celda de turno
        const tdTurno = document.createElement('td');
        tdTurno.textContent = turno;
        tdTurno.className = 'turno';
        row.appendChild(tdTurno);
        
        // Celdas de horarios por parada
        const tiempos = horarios[i].getElementsByTagName('tiempo');
        for (let j = 0; j < tiempos.length; j++) {
            const td = document.createElement('td');
            td.textContent = tiempos[j].textContent;
            row.appendChild(td);
        }
        
        tbody.appendChild(row);
    }
    
    tablaElement.appendChild(tbody);
}