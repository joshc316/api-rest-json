export async function obtenerIP() {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    document.getElementById("ip").textContent = data.ip;
}