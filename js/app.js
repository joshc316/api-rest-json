import { ForexAPI } from './api/gamesApi.js';
import { UI } from './ui/ui.js';
import { obtenerIP } from './services/ipService.js';

const api = new ForexAPI("040f4fa06fmsh843c851fb756a1ap1630a7jsn9083355ee6b8");;
const ui = new UI();

const loader = document.getElementById("loader");

document.getElementById("buscar").addEventListener("click", async () => {

    const limite = document.getElementById("limite").value;
    const categoria = document.getElementById("categoria").value;

    try {
        loader.classList.remove("d-none");

        const eventos = await api.obtenerEventos(limite);

        ui.mostrarEventos(eventos, categoria);

    } catch (error) {
        document.getElementById("resultados").innerHTML = `
            <div class="alert alert-danger">
                Error al cargar datos
            </div>
        `;
        console.error(error);
    } finally {
        loader.classList.add("d-none");
    }
});

obtenerIP();