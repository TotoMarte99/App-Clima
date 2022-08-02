//Imports de Main//
import { ClimaParaMañana, ClimaPMañana, ClimaHoy} from "./main.js";

//Declaracion de selectores//
let botonCelcius = document.getElementById("boton_celcius");
botonCelcius.addEventListener("click", cambiarAcelcius);
let botonFarenheit = document.getElementById("boton_farenheit");
botonFarenheit.addEventListener("click", cambiarAfarenheit);

//Cambio de fondos//
let cambio1 = document.querySelector("#climaMañana");
cambio1.addEventListener("click", cambioAlluvia);
cambio1.style.cursor = "pointer";
var viento = document.querySelector("#viento");
viento.style.color = "red";
let cambio2 = document.querySelector("#climaPasadoMañana");
cambio2.addEventListener("click", cambioAsoleado);
cambio2.style.cursor = "pointer";
let cambio3 = document.querySelector("#Clima");
cambio3.addEventListener("click", cambioHoy);
cambio3.style.cursor = "pointer";

//Fecha//
const DateTime = luxon.DateTime
const dia = document.getElementById("fecha_1");
dia.style.fontWeight = "700";
dia.style.textDecoration = "underline";
dia.style.color = "white"; 
const dt = DateTime.now();
dt.year
dt.month   
dt.day     

dia.innerHTML = `Hoy ${dt.day}/${dt.month}/${dt.year}`;


function cambioAlluvia(){
    var fondo = document.querySelector("#body");
    fondo.style.backgroundImage = "url('./img/pexels-genaro-servín-763398.jpg')";
    fondo.style.backgroundSize = "cover";
    fondo.style.height = "100vh"
    document.querySelector("#nubosidad").innerHTML = `${ClimaParaMañana[0].nubosidad}`
    document.querySelector("#humedad").innerHTML = `${ClimaParaMañana[0].humedad}`
    document.querySelector("#viento").innerHTML = `${ClimaParaMañana[0].viento}`
    const DateTime = luxon.DateTime
    const dia = document.getElementById("fecha_1");
    dia.style.fontWeight = "700";
    dia.style.textDecoration = "underline";
    dia.style.color = "white"; 
    const dt = DateTime.now();
    dt.year
    dt.month   
    dt.day     
    dia.innerHTML = `Domingo ${dt.day + 1}/${dt.month}/${dt.year}`;

    //Operador Ternario//
    ClimaParaMañana[0].viento < '30' ? viento.style.color = "white" : "red";
    
} 

function cambioAsoleado(){
    var fondo = document.querySelector("#body");
    fondo.style.backgroundImage = "url('./img/pexels-simon-berger-1353126.jpg')";
    fondo.style.backgroundSize = "cover";
    fondo.style.height = "100vh"
    document.querySelector("#nubosidad").innerHTML = `${ClimaPMañana[0].nubosidad}`
    document.querySelector("#humedad").innerHTML = `${ClimaPMañana[0].humedad}`
    document.querySelector("#viento").innerHTML = `${ClimaPMañana[0].viento}`
    const dt = DateTime.now();
    dt.year
    dt.month   
    dt.day     
    dia.innerHTML = `Lunes ${dt.day + 2}/${dt.month}/${dt.year}`;
    
    //Operador Ternario//
    ClimaPMañana[0].viento > '30' ? viento.style.color = "red" : "white";
}

function cambioHoy(){
    var fondo = document.querySelector("#body");
    fondo.style.backgroundImage = "url('https://source.unsplash.com/1600x1000/?landscape')";
    fondo.style.backgroundSize = "cover";
    fondo.style.height = "100vh"
    document.querySelector("#nubosidad").innerHTML = `${ClimaHoy[0].nubosidad}`
    document.querySelector("#humedad").innerHTML = `${ClimaHoy[0].humedad}  `
    document.querySelector("#viento").innerHTML = `${ClimaHoy[0].viento}`
    const DateTime = luxon.DateTime
    const dia = document.getElementById("fecha_1");
    dia.style.fontWeight = "700";
    dia.style.textDecoration = "underline";
    dia.style.color = "white"; 
    const dt = DateTime.now();
    dt.year
    dt.month   
    dt.day     

    dia.innerHTML = `Hoy ${dt.day}/${dt.month}/${dt.year}`;

    //Operador Ternario//
    ClimaHoy[0].viento > '30' ? viento.style.color = "red" : "white";
}


//Funciones de los eventos//
function cambiarAcelcius() {
    document.getElementById("Clima").innerHTML = `<p class="clima_hoy">Hoy 🌥️</p>
    <h1>
    ${ClimaHoy[0].temperatura + "C"}
    </h1>`;
    document.querySelector(
    "#climaMañana"
    ).innerHTML = `<p class="temperatura_mañana">Domingo ⛈️​ </p>
    <h1>
    ${ClimaParaMañana[0].temperatura + "C"}
    </h1>`;
    document.querySelector(
    "#climaPasadoMañana"
    ).innerHTML = `<p class="temperatura_mañana">Lunes 🌤️​</p>
    <h1>
    ${ClimaPMañana[0].temperatura + "C"}
    </h1>`;
}

function cambiarAfarenheit() {
    document.getElementById("Clima").innerHTML = `<p class="clima_hoy">Hoy 🌥️ </p>
    <h1>
    ${(24 * 9) / 5 + 32 + "°F"}
    </h1>`;
    document.querySelector(
    "#climaMañana"
    ).innerHTML = `<p class="temperatura_mañana">Domingo ⛈️​ </p>
    <h1>
    ${(15 * 9) / 5 + 32 + "°F"}
    </h1>`;
    document.querySelector(
    "#climaPasadoMañana"
    ).innerHTML = `<p class="temperatura_mañana">Lunes 🌤️​</p>
    <h1>
    ${(9 * 9) / 5 + 32 + "°F"}
    </h1>`;
}

//Uso de for para recorrer el array y brindar por consola una advertencia sobre los altos vientos//
for (const viento of ClimaPMañana) {
    console.log(
    "Advertencia: hoy el viento es de " +
    viento.viento +
    " Recomendamos suspender actividades nauticas"
    );
}


//Uso de Metodos de busqueda sobre el Array//
const lluviaHoy = ClimaHoy.some(
    (ClimaHoy)=> ClimaHoy.lluvia === "llueve"
);
console.log(lluviaHoy + ": Hoy no va a necesitar paraguas");

const lluvia = ClimaParaMañana.some(
    (ClimaParaMañana) => ClimaParaMañana.lluvia === "llueve"
);
console.log(lluvia + ": Hoy no va a necesitar paraguas");

const lluviaPmañana = ClimaPMañana.some(
    (ClimaPMañana) => ClimaPMañana.lluvia === "llueve"
);
console.log(lluviaPmañana + ": Recuerde mañana, llevar paraguas");
