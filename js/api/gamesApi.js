export class ForexAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.url = "https://forex-factory-scraper1.p.rapidapi.com/get_calendar_details";
    }

    async obtenerEventos(limite) {

        const params = new URLSearchParams({
            year: "2024",
            month: "4",
            day: "10",
            currency: "ALL",
            event_name: "ALL",
            timezone: "GMT-06:00",
            time_format: "12h"
        });

        const url = `${this.url}?${params}`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': this.apiKey,
                'x-rapidapi-host': 'forex-factory-scraper1.p.rapidapi.com'
            }
        };

        const res = await fetch(url, options);

        console.log("STATUS:", res.status); // 👈 DEBUG

        if (!res.ok) {
            const errorText = await res.text();
            console.error(errorText);
            throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        console.log("DATA:", data); // 👈 DEBUG

        return data.slice(0, limite);
    }
}