
//Aplicaciones de funciones//
function temperatura1(nubosidad) {
    console.log("La nubosidad hoy en Rosario es de:");
    console.log(nubosidad);
}

function temperatura2(humedad) {
    console.log("La humedad hoy en Rosario es de:");
    console.log(humedad);
}

function temperatura3(viento) {
    console.log("El viento hoy en Rosario se encuentra en:");
    console.log(viento);
}

temperatura1("25%");
temperatura2("78%");
temperatura3("13 Km/h");



//Peticion de preferencia en la visualizacion de la temperatura//
for(i = 0; i < 1; i++){
    let peticion = prompt("¿En que medida desea visualizar la temperatura? -Celsius -Fahrenheit -Kelvin");
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
