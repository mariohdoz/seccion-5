const { getLatLng } = require('./assets/location');
const { getClima } = require('./assets/weather');


const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
})
.help()
.argv;

const getInfo = async (direccion) => {

    let ciudad = await getLatLng(direccion);
    let tiempo = await getClima(ciudad.lat, ciudad.lng);

    return `El clima actual de ${ciudad.ciudad} es de ${tiempo} centigrados`;

}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp)
    })
    .catch( e => console.log(e));