//Imports de Main//
import { ClimaParaMañana, ClimaPMañana, ClimaHoy } from "./main.js";

//Declaracion de selectores//

var buscadorApp = document.getElementById("subirInfo");
buscadorApp.addEventListener("click", subir_info);

let ciudad = document.getElementById("buscarCiudad");
let pais = document.getElementById("buscarPais");

//Fecha//
const DateTime = luxon.DateTime;
const dia = document.getElementById("fecha_1");
dia.style.padding = "0px";
dia.style.fontWeight = "700";
dia.style.filter = "filter: drop-shadow(16px 16px 20px orange)";
dia.style.color = "white";
const dt = DateTime.now();
dt.year;
dt.month;
dt.day;
dia.innerHTML = `Today ${dt.day}/${dt.month}/${dt.year}`;

//Envio de datos//
function subir_info(e) {
  e.preventDefault();

  if (ciudad.value === "" || pais.value === "") {
    mostrarError("Ambos campos son obligatorios...");
    return;
  }

  llamadoAPI(ciudad.value, pais.value);
}

function llamadoAPI(ciudad, pais) {
  const apiId = "137e3e20b0b47894913292b4de216a3a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      dataJSON.cod === "404" ? mostrarError("Ciudad no encontrada...") : mostrarClima(dataJSON);
    });
}

let humedad = document.querySelector("#humedad");
let vientoo = document.querySelector("#viento");
let nubosidad = document.querySelector("#nubosidad");
let ciudades = document.querySelector("#ciudades");
let clima = document.querySelector("#temperatura_hoy");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let descriptionn = document.querySelector("#banner_informativo");

function mostrarClima(data) {
  const { name } = data;
  const { temp, humidity, temp_min, temp_max } = data.main;
  const { speed } = data.wind;
  const { all } = data.clouds;
  const { description } = data.weather[0];

  const tempC = KelvinToCentigrados(temp);
  const minT = KelvinToCentigrados(temp_min);
  const maxT = KelvinToCentigrados(temp_max);
  const tempF = CentigradosToFarenheit(temp);
  const minToF = MinToFarenheit(temp_min);
  const maxToF = MaxToFarenheit(temp_max);

  let btn = document.getElementById("F");
  btn.addEventListener("click", cambiarFarenheit);
  function cambiarFarenheit() {
    document.querySelector("#temperatura_hoy").innerHTML = tempF + "°F";
    document.querySelector("#min").innerHTML = `<small>Temp.Min</small> 
    <h4>${minToF + "°F"}</h4>`;
    document.querySelector("#max").innerHTML = `<small>Temp.Max</small> 
    <h4>${maxToF + "°F"}</h4>`;
  }

  let btn2 = document.getElementById("C");
  btn2.addEventListener("click", cambiarCelcius);
  function cambiarCelcius() {
    document.querySelector("#temperatura_hoy").innerHTML = tempC + "°C";
    document.querySelector("#min").innerHTML = `<small>Temp.Min</small> 
    <h4>${minT + "°C"}</h4>`;
    document.querySelector("#max").innerHTML = `<small>Temp.Max</small> 
    <h4>${maxT + "°C"}</h4>`;
  }

  humedad.innerHTML = `<h3>${humidity}%</h3>`;
  vientoo.innerHTML = `<h3>${speed}Km/h</h3`;
  nubosidad.innerHTML = `<h3>${all}%</h3>`;
  ciudades.innerHTML = `<h2>${name}</h2>`;
  clima.innerHTML = `<p>${tempC}°</p>`;
  min.innerHTML = `
  <small>Temp.Min</small> 
  <h4>${minT}°</h4>`;
  max.innerHTML = `
  <small>Temp.Max</small> 
  <h4>${maxT}°</h4>`;
  descriptionn.innerHTML = description;

   if (description === "clear sky") {
     document.body.style.backgroundImage = "url('./img/despejado.jpg')";
   } else if (description === "rain" || "shower rain" || "light rian") {
     document.body.style.backgroundImage = "url('./img/lluvia.jpg')";
   } else if (description === "light snow" || "light snow") {
     document.body.style.backgroundImage = "url('./img/nieve.jpg')";
   } else if (description === "thunderstorm") {
     document.body.style.backgroundImage = "url('./img/tormenta.jpg')";
   } else if (
     description === "overcast clouds" || "few clouds" || "scattered clouds" || "broken clouds") {
     document.body.style.backgroundImage = "url('./img/nublado.jpg')";
   }
  // description === "clear sky" ? document.body.style.backgroundImage = "url('./img/despejado.jpg')" : description === "rain" || "shower rain" || "light rian" ? document.body.style.backgroundImage = "url('./img/lluvia.jpg')" : description === "light snow"  ? document.body.style.backgroundImage = "url('./img/nieve.jpg')" : description === "thunderstorm" ? document.body.style.backgroundImage = "url('./img/tormenta.jpg')" :  description === "overcast clouds" || "few clouds" || "scattered clouds" || "broken clouds" ? document.body.style.backgroundImage = "url('./img/nublado.jpg')"
}



function mostrarError(mensaje) {
  const alerta = document.createElement("p");
  alerta.style.setProperty("color", "red");
  alerta.style.setProperty("text-align", "center");
  alerta.style.setProperty("padding-top", "20px");
  alerta.classList.add("alert-mensaje");
  alerta.innerHTML = mensaje;
  buscando.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

//Funciones de los eventos//
function CentigradosToFarenheit(temp) {
  return parseInt(((temp - 273.15) * 9) / 5 + 32);
}
function MinToFarenheit(temp_min) {
  return parseInt(((temp_min - 273.15) * 9) / 5 + 32);
}
function MaxToFarenheit(temp_max) {
  return parseInt(((temp_max - 273.15) * 9) / 5 + 32);
}

function KelvinToCentigrados(temp) {
  return parseInt(temp - 273.15);
}

//Uso de for para recorrer el array y brindar por consola una advertencia sobre los altos vientos//
for (const viento of ClimaPMañana) {
  console.log(
    "Warning: today the wind is to strong " +
      viento.viento +
      " We recommend taking care, and suspend nautical activities "
  );
}

//Uso de Metodos de busqueda sobre el Array//
const lluviaHoy = ClimaHoy.some((ClimaHoy) => ClimaHoy.lluvia === "llueve");
console.log(lluviaHoy + ": You don't need a unbrella today");

const lluvia = ClimaParaMañana.some(
  (ClimaParaMañana) => ClimaParaMañana.lluvia === "llueve"
);
console.log(lluvia + ": You don't need a unbrella today");

const lluviaPmañana = ClimaPMañana.some(
  (ClimaPMañana) => ClimaPMañana.lluvia === "llueve"
);
console.log(lluviaPmañana + ": Remember, take your umbrella before go outside");
