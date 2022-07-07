
//Aplicaciones de funciones//
function temperatura1(nubosidad) {
    console.log("La nubosidad HOY en Rosario es de:");
    console.log(nubosidad);
}

function temperatura2(humedad) {
    console.log("La humedad HOY en Rosario es de:");
    console.log(humedad);
}

function temperatura3(viento) {
    console.log("El viento HOY en Rosario se encuentra en:");
    console.log(viento);
}

temperatura1("25%");
temperatura2("78%");
temperatura3("13 Km/h");



//Peticion de preferencia en la visualizacion de la temperatura//
for(i = 0; i < 1; i++){
    let peticion = prompt("¿En que medida desea visualizar la temperatura?\n\n -Celsius\n -Fahrenheit\n -Kelvin");
    if (peticion == "Fahrenheit") {
        document.getElementById("Clima").innerHTML = "75.2°F";
    } else if (peticion == "Kelvin") {
        document.getElementById("Clima").innerHTML = "297.15°K";
    } else if (peticion == "Celcius"){
        document.getElementById("Clima").innerHTML = "24°C";
    }
}

function magnitud() {
    swal(" ¡Modificación realizada ! ", " ");
}
magnitud();

class ClimaMañana{
    constructor(humedad,viento,nubosidad,sesacionTermica,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.sesacionTermica = sesacionTermica
        this.temperatura = temperatura
    }

}
class ClimaPasadoMañana{
    constructor(humedad,viento,nubosidad,sesacionTermica,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.sesacionTermica = sesacionTermica
        this.temperatura = temperatura
    }

}
class ClimaATresDias{
    constructor(humedad,viento,nubosidad,sesacionTermica,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.sesacionTermica = sesacionTermica
        this.temperatura = temperatura
    }

}
const ClimaParaMañana = []
ClimaParaMañana.push(new ClimaMañana('15%','2Km/h','19%','12°','15°'))

const ClimaPMañana = []
ClimaPMañana.push(new ClimaPasadoMañana('0.2%','20Km/h','0.1%','3°','9°'))

const ClimaTresDias = []
ClimaTresDias.push(new ClimaATresDias('15%','20Km/h','2%','15°','19°')) 

const climafuturo = ClimaParaMañana.concat(ClimaPMañana.concat(ClimaTresDias))
console.log(climafuturo)