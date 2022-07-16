const hoy = new Date("Octubre 10, 2022");
const dia = document.getElementById("fecha_1");
dia.innerHTML = `Fecha de hoy: ${hoy}`;
dia.style.color = "white";

//Aplicaciones de funciones//
function advertencia() {
    let entrada = prompt("Ingrese su localizacion");
    if (entrada == "Rosario") {
    alert(
        "Su ubicacion es Rosario: El viento norte amenaza con traer el humo de las islas"
    );
    } else {
    console.log("Su ubicacion es " + entrada);
    }
}
advertencia();

//Peticion de preferencia en la visualizacion de la temperatura//
let botonCelcius = document.getElementById("boton_celcius");
botonCelcius.addEventListener("click", cambiarAcelcius);

function cambiarAcelcius() {
    document.getElementById("Clima").innerHTML = "24°C";
}

let botonFarenheit = document.getElementById("boton_farenheit");
botonFarenheit.addEventListener("click", cambiarAfarenheit);

function cambiarAfarenheit() {
    document.getElementById("Clima").innerHTML = "75.2°F";
}

let botonKelvin = document.getElementById("boton_kelvin");
botonKelvin.addEventListener("click", cambiarAkelvin);

function cambiarAkelvin() {
    document.getElementById("Clima").innerHTML = "297.15°K";
}

//Creacion de Arrays que nos permiten visualizar la temperatura en los proximos dias//
class ClimaMañana {
    constructor(humedad, viento, nubosidad, lluvia, temperatura) {
    this.humedad = humedad;
    this.viento = viento;
    this.nubosidad = nubosidad;
    this.lluvia = lluvia;
    this.temperatura = temperatura;
    }
}
class ClimaPasadoMañana {
    constructor(humedad, viento, nubosidad, lluvia, temperatura) {
    this.humedad = humedad;
    this.viento = viento;
    this.nubosidad = nubosidad;
    this.lluvia = lluvia;
    this.temperatura = temperatura;
    }
}
class ClimaATresDias {
    constructor(humedad, viento, nubosidad, lluvia, temperatura) {
    this.humedad = humedad;
    this.viento = viento;
    this.nubosidad = nubosidad;
    this.lluvia = lluvia;
    this.temperatura = temperatura;
    }
}
const ClimaParaMañana = [];
ClimaParaMañana.push(
    new ClimaMañana("15%", "2Km/h", "19%", "No llueve", "15°")
);

const ClimaPMañana = [];
ClimaPMañana.push(
    new ClimaPasadoMañana("0.2%", "35Km/h", "0.1%", "llueve", "9°")
);

const ClimaTresDias = [];
ClimaTresDias.push(new ClimaATresDias("15%", "20Km/h", "2%", "llueve", "19°"));

const climafuturo = ClimaParaMañana.concat(ClimaPMañana.concat(ClimaTresDias));
console.log(climafuturo);

//Uso de for para recorrer el array y brindar por consola una advertencia sobre los altos vientos//
for (const viento of ClimaPMañana) {
    console.log(
        "Advertencia: hoy el viento es de " +
        viento.viento +
        " Recomendamos suspender actividades nauticas"
    );
}

//Uso de Metodos de busqueda sobre el Array//
const lluvia = ClimaParaMañana.some(
    (ClimaParaMañana) => ClimaParaMañana.lluvia === "llueve"
);
console.log(lluvia + ": Hoy no va a necesitar paraguas");

const lluviaPmañana = ClimaPMañana.some(
    (ClimaPMañana) => ClimaPMañana.lluvia === "llueve"
);
console.log(lluviaPmañana + ": Recuerde mañana, llevar paraguas");

const lluviaParaTres = ClimaTresDias.some(
    (ClimaTresDias) => ClimaTresDias.lluvia === "llueve"
);
console.log(lluviaPmañana + ": Recuerde llevar paraguas pasado mañana");

//Funcion que brinda recomendaciones para salir a la calle//
function Recomendaciones() {
    reco = Number(
    prompt(
        "Desea obtener recomendaciones para salir hoy?\n\n (Ingrese n°)\n\n 1) Si \n 2) No"
    )
    );
    if (reco == 1) {
        alert(
        "El dia de hoy le sugerimos salir a la calle con vestimenta ligera y con una botella de agua"
        );
    } else if (reco == 2) {
        alert("Que tenga un excelente dia :) ");
    }
}
Recomendaciones();

//Alert indicando fin del ciclo interactivo//
function magnitud() {
    swal(" ¡Hasta luego ! ", " ");
}
magnitud();
