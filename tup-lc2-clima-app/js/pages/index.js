
let selector = document.getElementById("select-city");
let card = document.getElementById("section-weather-result");
function addCitiesToSelector() {
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) {
     
        selector.innerHTML += `<option value="noCities" disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) {
            selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

function createCard() {
    consultAPI(selector.value);
}

let consultButton = document.getElementById("MostrarClima");
consultButton.addEventListener("click", createCard)

addCitiesToSelector();


