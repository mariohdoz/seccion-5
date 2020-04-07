const axios = require('axios');

const getLatLng = async ( direccion ) => {

    let aux_dir = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${aux_dir}`,
        headers: { 'x-rapidapi-key': '5fb7f8cde0mshd8dd7fba039a57fp104a9fjsn79c1713b6563' }
    });

    const inst = await instance.get();

    
    if( inst.data.Results.length === 0 ){
        throw new Error(`No hay resultados para ${direccion}`)
    }
    
    let data = inst.data.Results[0];
    let ciudad = data.name;
    let lat = data.lat;
    let lng = data.lon;

    return {
        ciudad,
        lat,
        lng
    }

}

module.exports = {
    getLatLng
}