const url = "empleados.json";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const empleados = data.Company.Employees;
        const contenedor = document.getElementById("contenedor");

        empleados.forEach(emp => {
          const card = document.createElement("div");
          card.className = "card";

          card.innerHTML = `
            <h2>${emp.FirstName} ${emp.LastName}</h2>
            <p><strong>Ciudad:</strong> ${emp.Address.City}</p>
          `;

          contenedor.appendChild(card);
        });
      })
      .catch(err => console.error("Error cargando JSON:", err));

      