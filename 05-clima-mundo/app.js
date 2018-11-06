const lugar = require('./lugar/lugar'),
    clima = require('./clima/clima'),
    argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad para obtener el clima',
            demand: true
        }
    }).argv;

console.log(argv.direccion);


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));