const apiKey = "0b79f37cf89345ac807172148250312";
const baseUrl = "https://api.weatherapi.com/v1";

const nowCity = "Barcelona";

//función para pedir datos
const getWeather = async (city) => {
try {
    // Construimos la URL correcta
    const url = `${baseUrl}/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error al obtener los datos");
    }
    const data = await response.json(); // <-- convertir a JSON
    return data; // <-- devolvemos los datos para usarlos fuera

} catch (error) {
    console.error("Error en getWeather:", error);
}
};

//getWeather(nowCity).then(data => console.log(data));


//mostrar el tiempo actual (ciudad, país, icono, temperatura, etc.)
// ENTRADA: "data" es el objeto completo que devuelve la API.
function currentWeather (data){
    const { location, current }= data;

    // Seleccionamos los elementos del HTML donde se va a mostrar la información:
    const cityElement = document.getElementById("city");
    const conditionElement = document.getElementById("condition");
    const iconElement = document.getElementById("icon");
    const tempElement = document.getElementById("temp");


    // Datos del clima actual:
    const precipitation = current.precip_mm;  // mm de lluvia
    const humidity = current.humidity;        // %
    const wind = current.wind_kph;            // km/h

    //mostrar cada uno de los elementos
    cityElement.textContent = `${location.name}, ${location.country}`;
    conditionElement.textContent = current.condition.text; //Sunny", "Cloudy", etc.
    iconElement.src = "https:" + current.condition.icon; // La API devuelve iconos sin "https:" delante, por eso se lo añadimos
    iconElement.alt = current.condition.text;//texto alternativo con la descripción del clima
    tempElement.textContent = `${current.temp_c} ºC`; //temperatura

    // Información adicional
    document.getElementById("precip").textContent = "Precipitaciones: " + precipitation + " mm";
    document.getElementById("humid").textContent = "Humedad: " + humidity + "%";
    document.getElementById("wind").textContent = "Viento: " + wind + " Km/h";

}


//función para tomar la prevision por horas 
function renderHourlyForecast (data) {

    const container = document.getElementById("container");

    container.innerHTML = "";
    const hours = data.forecast.forecastday[0].hour; // obtenemos pronostico de cada hora


    //Recorremos cada hora con forEach.
    hours.forEach(hour => {
        const time = hour.time.split(" ")[1]; // Obtenemos la hora en formato "HH:MM"."17:00" 

        const card = document.createElement("div");
        card.classList.add("hour-card");

        card.innerHTML = `
            <p>${time}</p>
            <img src="https:${hour.condition.icon}">
            <p>${hour.temp_c} ºC</p>
        `;
        container.appendChild(card);
    });  
}  


//Carga la página
document.addEventListener("DOMContentLoaded", () => {
    getWeather("Barcelona").then(data => {
        if (!data) return;          // por si hubo error
        currentWeather(data);       // pinta el tiempo actual
        renderHourlyForecast(data); // pinta la previsión por horas
    });
});
