export class UI {

    traducirImpacto(impact) {
        if (impact.includes("High")) return "Alto";
        if (impact.includes("Medium")) return "Medio";
        if (impact.includes("Low")) return "Bajo";
        return impact;
    }

    colorImpacto(impact) {
        if (impact.includes("High")) return "danger";
        if (impact.includes("Medium")) return "warning";
        if (impact.includes("Low")) return "success";
        return "secondary";
    }

    generarNota(e) {
        return `Este evento económico relacionado con ${e.currency} puede afectar el mercado. Un impacto ${this.traducirImpacto(e.impact)} indica posibles movimientos importantes en precios.`;
    }

    mostrarEventos(eventos, categoria) {

        const contenedor = document.getElementById("resultados");
        contenedor.innerHTML = "";

        // FILTRO
        let filtrados = eventos;

        if (categoria === "high") {
            filtrados = eventos.filter(e => e.impact.includes("High"));
        }
        if (categoria === "medium") {
            filtrados = eventos.filter(e => e.impact.includes("Medium"));
        }
        if (categoria === "low") {
            filtrados = eventos.filter(e => e.impact.includes("Low"));
        }

        if (filtrados.length === 0) {
            contenedor.innerHTML = `
                <div class="alert alert-warning">
                    No hay datos disponibles
                </div>
            `;
            return;
        }

        // 🔥 DASHBOARD

        contenedor.innerHTML = `
            <div class="col-12 mb-4">
                <h3>📊 Dashboard Económico</h3>
            </div>

            ${filtrados.map(e => {
                const color = this.colorImpacto(e.impact);
                const impactoES = this.traducirImpacto(e.impact);

                return `
                    <div class="col-md-4">
                        <div class="card shadow h-100 card-hover border-${color}">
                            <div class="card-body d-flex flex-column">

                                <h5>${e.name}</h5>

                                <p>📅 ${e.date} | 🕒 ${e.time}</p>
                                <p>💱 Moneda: <strong>${e.currency}</strong></p>

                                <p>
                                    <span class="badge bg-${color}">
                                        Impacto ${impactoES}
                                    </span>
                                </p>

                                <p><strong>Resultado:</strong> ${e.actual || "N/A"}</p>

                                <hr>

                                <p style="font-size: 0.9em;">
                                    🧠 ${this.generarNota(e)}
                                </p>

                            </div>
                        </div>
                    </div>
                `;
            }).join("")}

            <!-- TABLA -->
            <div class="col-12 mt-5">
                <h4>📋 Detalle en tabla</h4>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Moneda</th>
                            <th>Evento</th>
                            <th>Impacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtrados.map(e => `
                            <tr>
                                <td>${e.date}</td>
                                <td>${e.time}</td>
                                <td>${e.currency}</td>
                                <td>${e.name}</td>
                                <td>${this.traducirImpacto(e.impact)}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;
    }
}