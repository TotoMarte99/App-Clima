const hoy = new Date("Octubre 10, 2022")

//Aplicaciones de funciones//
function temperatura1(nubosidad) {

    console.log("La nubosidad del dia " + hoy.toLocaleDateString() + " en Rosario es de:");
    console.log(nubosidad);
}

function temperatura2(humedad) {
    console.log("La humedad " + hoy.toLocaleDateString() + " en Rosario es de:");
    console.log(humedad);
}

function temperatura3(viento) {
    console.log("El viento " + hoy.toLocaleDateString() + " en Rosario se encuentra en:");
    console.log(viento);
}

temperatura1("25%");
temperatura2("78%");
temperatura3("13 Km/h");



//Peticion de preferencia en la visualizacion de la temperatura//
for(i = 0; i < 1; i++){
    let peticion = Number(prompt("¿En que medida desea visualizar la temperatura?\n\n (Ingrese n°) \n\n 1-Fahrenheit\n 2-Kelvin\n 3-Celsius"));
    if (peticion == 1) {
        document.getElementById("Clima").innerHTML = "75.2°F";
    } else if (peticion == 2) {
        document.getElementById("Clima").innerHTML = "297.15°K";
    } else if (peticion == 3){
        document.getElementById("Clima").innerHTML = "24°C";
    }
}

//Creacion de Arrays que nos permiten visualizar la temperatura en los proximos dias//
class ClimaMañana{
    constructor(humedad,viento,nubosidad,lluvia,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.lluvia = lluvia
        this.temperatura = temperatura
    }

}
class ClimaPasadoMañana{
    constructor(humedad,viento,nubosidad,lluvia,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.lluvia = lluvia
        this.temperatura = temperatura
    }

}
class ClimaATresDias{
    constructor(humedad,viento,nubosidad,lluvia,temperatura){
        this.humedad = humedad
        this.viento = viento
        this.nubosidad = nubosidad
        this.lluvia = lluvia
        this.temperatura = temperatura
    }

}
const ClimaParaMañana = []
ClimaParaMañana.push(new ClimaMañana('15%','2Km/h','19%','No llueve','15°'))

const ClimaPMañana = []
ClimaPMañana.push(new ClimaPasadoMañana('0.2%','35Km/h','0.1%','llueve','9°'))

const ClimaTresDias = []
ClimaTresDias.push(new ClimaATresDias('15%','20Km/h','2%','llueve','19°')) 

const climafuturo = ClimaParaMañana.concat(ClimaPMañana.concat(ClimaTresDias))
console.log(climafuturo)

//Uso de for para recorrer el array y brindar por consola una advertencia sobre los altos vientos//
for(const viento of ClimaPMañana){
    console.log('Advertencia: hoy el viento es de ' + viento.viento + ' Recomendamos suspender actividades nauticas')
}


//Uso de Metodos de busqueda sobre el Array//
const lluvia = ClimaParaMañana.some(ClimaParaMañana => ClimaParaMañana.lluvia === 'llueve')
console.log(lluvia + ': Hoy no va a necesitar paraguas')

const lluviaPmañana = ClimaPMañana.some(ClimaPMañana => ClimaPMañana.lluvia === 'llueve')
console.log(lluviaPmañana + ': Recuerde mañana, llevar paraguas')

const lluviaParaTres = ClimaTresDias.some(ClimaTresDias => ClimaTresDias.lluvia === 'llueve')
console.log(lluviaPmañana + ': Recuerde llevar paraguas pasado mañana')

//Funcion que brinda recomendaciones para salir a la calle//
function Recomendaciones(){
    reco = Number(prompt('Desea obtener recomendaciones para salir hoy?\n\n (Ingrese n°)\n\n 1) Si \n 2) No'))
    if( reco == 1){
        alert('El dia de hoy le sugerimos salir a la calle con vestimenta ligera y con una botella de agua')
    }
    else if( reco == 2){
        alert('Que tenga un excelente dia :) ')
    }
    
}
Recomendaciones()

//Alert indicando fin del ciclo interactivo//
function magnitud() {
    swal(" ¡Hasta luego ! ", " ");
}
magnitud();
