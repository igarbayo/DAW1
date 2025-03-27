document.addEventListener("DOMContentLoaded", function() {
    loadOrganigrama();
});

function loadOrganigrama() {
    const organigrama = document.querySelector("#organigrama ul");
    const loading = document.querySelector(".loading");
    const container = document.getElementById("organigrama");

    fetch("../data/organigrama.json")
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => {
            console.error("Error cargando el organigrama:", error);
            loading.innerHTML = "<p>Error al cargar los datos.</p>";
        });
}