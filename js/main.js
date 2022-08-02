//Creacion de Arrays que nos permiten visualizar la temperatura en los proximos dias//
localStorage.setItem('Ubicacion', 'Rosario');


class ClimaMañana {
    constructor(humedad, viento, nubosidad, lluvia, temperatura,id) {
        this.humedad = humedad;
        this.viento = viento;
        this.nubosidad = nubosidad;
        this.lluvia = lluvia;
        this.temperatura = temperatura;
        this.id = id;
    }
}
class ClimaPasadoMañana {
    constructor(humedad, viento, nubosidad, lluvia, temperatura,id) {
        this.humedad = humedad;
        this.viento = viento;
        this.nubosidad = nubosidad;
        this.lluvia = lluvia;
        this.temperatura = temperatura;
        this.id = id;
    }
}

class ClimaDeHoy {
    constructor(humedad, viento, nubosidad, lluvia, temperatura,id) {
        this.humedad = humedad;
        this.viento = viento;
        this.nubosidad = nubosidad;
        this.lluvia = lluvia;
        this.temperatura = temperatura;
        this.id = id;
    }
}
const ClimaParaMañana = [];
ClimaParaMañana.push(
    new ClimaMañana("15%", "2Km/h", "19%", "llueve", "15°",'Clima Para Mañana')
);
localStorage.setItem("Clima para mañana", JSON.stringify(ClimaParaMañana));

const ClimaPMañana = [];
ClimaPMañana.push(
    new ClimaPasadoMañana("0.2%", "35Km/h", "0.1%", "No llueve", "9°",'Clima Pasado Mañana')
);
localStorage.setItem("Clima Pasado Mañana", JSON.stringify(ClimaPMañana));

const ClimaHoy = [];
ClimaHoy.push(
    new ClimaDeHoy("78%", "33Km/h", "25%", "No llueve", "24°",'Clima de Hoy'));
localStorage.setItem("clima de Hoy", JSON.stringify(ClimaHoy));

//Aplicacion de Spread//
const ClimaParaHoy = JSON.parse(localStorage.getItem("clima de Hoy"));
console.log(...ClimaParaHoy)
const ClimaparaMañana = JSON.parse(localStorage.getItem("Clima para mañana"));
console.log(...ClimaparaMañana)
const ClimaParaPasadoMañana = JSON.parse(localStorage.getItem("Clima Pasado Mañana"));
console.log(...ClimaParaPasadoMañana)


export{ClimaParaMañana,ClimaPMañana,ClimaHoy}

