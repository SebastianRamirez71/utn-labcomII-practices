async function validateCity(newCity) {
  let cities = getCitiesFromLocalStorage();
                                                 /* valido las ciudades, recorra la ciudad ingresada con las que ya estan, si son iguales es que ya se encuentra añadida*/
  for (let i = 0; i < cities.length; i++) {
    if (newCity == cities[i]) {
      console.log("YA ALMACENADA");
      return "yaAlmacenada";
    }
  }

  if ((await consultAPI(newCity)) == "error") {
                                                            /*Si la ciudad da error en el JSON es que no se encuentra*/
    return "error";
  } else {
    console.log("BIEN");
    return "agregarCiudad";                 /* Sino sucedio lo anterior es que se agrega correctamente*/
  }
}

async function addCityToLocalStorage() {
  let cities = getCitiesFromLocalStorage();
  let newCity = document.getElementById("inputCity").value;                 //El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
  newCity = newCity.toUpperCase();

  switch (await validateCity(newCity)) {
    case "agregarCiudad":
      cities.push(newCity);                                     // el método push es una función que nos permite añadir un nuevo elemento al final de un array
      localStorage.setItem("CITIES", JSON.stringify(cities));        // el método stringify nos permite transformar un objeto a un string.
      document.getElementById("mensajesRes").innerHTML += agregarCiudad;
      removeMessage();

      break;
    case "yaAlmacenada":
      document.getElementById("mensajesRes").innerHTML += yaAlmacenada;
      removeMessage();

      break;
    case "error":
      document.getElementById("mensajesRes").innerHTML += errorNo;
      removeMessage();
      break;
  }
}

function removeMessage() {
  setTimeout(function () {
    document.getElementsByClassName("alerta")[0].remove();
  }, 2500);
}

let agregarCiudad =
  '<p class="alerta agregarCiudad">Ciudad agregada con éxito</p>';
let errorNo =
  '<p class="alerta error">Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
let yaAlmacenada =
  '<p class="alerta yaAlmacenada" >La ciudad ingresada ya se encuentra almacenada</p>';

let buttonAddCity = document.getElementById("buttonAdd");
buttonAddCity.addEventListener("click", addCityToLocalStorage);
