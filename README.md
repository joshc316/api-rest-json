# 📊 API REST Dashboard - Eventos Económicos

Aplicación web desarrollada con JavaScript que consume una API REST para mostrar eventos económicos en un dashboard interactivo.

---

## 🎯 Descripción

Esta aplicación permite consultar eventos económicos relevantes obtenidos desde una API externa.  
Los datos se procesan y se muestran en una interfaz moderna tipo dashboard, facilitando su visualización y análisis.

---

## ⚙️ Funcionamiento

1. El usuario selecciona:
   - Cantidad de registros
   - Tipo de impacto (Alto, Medio, Bajo)

2. La aplicación realiza una petición HTTP a la API utilizando `fetch`.

3. La API responde con datos en formato JSON que incluyen:
   - Fecha del evento
   - Hora
   - Moneda
   - Nombre del evento
   - Nivel de impacto
   - Resultado del evento

4. La aplicación procesa los datos:
   - Filtra por categoría seleccionada
   - Traduce el nivel de impacto al español
   - Genera una breve descripción del evento

5. Finalmente, los datos se muestran en:
   - Tarjetas (cards)
   - Tabla estructurada

---

## 🧠 Características principales

- Consumo de API REST
- Manejo de datos en formato JSON
- Uso de JavaScript con módulos (ES Modules)
- Programación orientada a objetos (OOP)
- Interfaz moderna con Bootstrap
- Dashboard interactivo
- Filtros dinámicos
- Traducción de datos al español
- Loader animado durante la carga
- Modo oscuro

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla + Modules)
- Bootstrap 5
- API REST (RapidAPI)

---

## 🚀 Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/joshc316/api-rest-json.git
