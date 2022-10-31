function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");

    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

    // funcion asincronica para obtener la info de la API
async function consultAPI(cityName) {
try {
    const apiKey = "6cfae99f0e3ec73740b84a68b52d0398"
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=es`)
    const data = await fetch(url)
    if(data.ok) {
        const datos = await data.json()
        MostrarClima(datos);
    } else{
        console.log(data.status) // 404
        return "error"
    }
    
} catch(err){
    console.log(err)
}
                            // try and catch para asegurarnos que halla un error y mostrarlo

};



  
function MostrarClima(data) {
    
    

    let card = document.getElementById("section-weather-result");
    
    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let sensacion = data.main.feels_like;
    let Hum = data.main.humidity;
    let viento = data.wind.speed;
    let presion = data.main.pressure;

     card.innerHTML = `<div class="card">
                    <h3>${city}</h3>
                    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Imagen">
                    <p>Temperatura: ${temp}°</p>
                    <p>Sensación Térmica: ${sensacion}°</p>
                    <p>Humedad: ${Hum}%</p>
                    <p>Velocidad del Viento: ${viento}km/h</p>
                    <p>Presión: ${presion} P</p>
                </div>`

 

}


    
                  


