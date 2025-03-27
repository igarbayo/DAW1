document.addEventListener("DOMContentLoaded", function() {
    loadOrganigrama();
});

function loadOrganigrama() {
    const organigrama = document.querySelector("#organigrama ul");
    const loading = document.querySelector(".loading");
    const container = document.getElementById("organigrama");

    const data = {
        "roles": [
            { "title": "Director", "name": "Juan Pérez Gómez" },
            { "title": "Director Adjunto", "name": "María López Sánchez" },
            { "title": "Orientadora Escolar", "name": "Ana Martínez Ruiz" }
        ],
        "cycles": [
            { "name": "Infantil", "jefe": "Laura Díaz Fernández" },
            { "name": "Primaria", "jefe": "Carlos Ruiz Martín" },
            { "name": "Secundaria", "jefe": "Sofía García Pérez", 
                "departments": [
                    { "name": "Artes", "jefe": "Marta Sánchez López" },
                    { "name": "Humanidades", "jefe": "Pedro Gómez Martínez" },
                    { "name": "Tecnología", "jefe": "Javier Fernández Ruiz" },
                    { "name": "Idiomas", "jefe": "Elena Rodríguez Díaz" },
                    { "name": "Ciencias", "jefe": "David López García" }
                ]
            },
            { "name": "Bachillerato", "jefe": "Carmen Vidal Martínez", 
                "departments": [
                    { "name": "Artes", "jefe": "Marta Sánchez López" },
                    { "name": "Humanidades", "jefe": "Pedro Gómez Martínez" },
                    { "name": "Tecnología", "jefe": "Javier Fernández Ruiz" },
                    { "name": "Idiomas", "jefe": "Elena Rodríguez Díaz" },
                    { "name": "Ciencias", "jefe": "David López García" }
                ]
            }
        ]
    };

    // Simular carga de datos (1.5 segundos)
    setTimeout(() => {
        organigrama.innerHTML = "";
        container.classList.remove("visible");

        data.roles.forEach(role => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${role.title}:</strong> ${role.name}`;
            organigrama.appendChild(li);
        });

        data.cycles.forEach(cycle => {
            const cycleLi = document.createElement("li");
            cycleLi.innerHTML = `<strong>${cycle.name}</strong>`;
            organigrama.appendChild(cycleLi);

            const subList = document.createElement("ul");

            const jefeLi = document.createElement("li");
            jefeLi.textContent = `Jefe de Estudios: ${cycle.jefe}`;
            subList.appendChild(jefeLi);

            if (cycle.departments) {
                cycle.departments.forEach(dept => {
                    const deptLi = document.createElement("li");
                    deptLi.innerHTML = `<strong>${dept.name}</strong>: ${dept.jefe}`;
                    subList.appendChild(deptLi);
                });
            }

            organigrama.appendChild(subList);
        });

        loading.style.display = "none";
        container.classList.add("visible");
    }, 1500);
}