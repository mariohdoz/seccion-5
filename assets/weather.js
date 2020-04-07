const axios = require('axios');

const getClima = async (lat, lng) => {

    const inst = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b4f0f365c850cd789a818e61678247fd&units=metric`);

    return inst.data.main.temp;
}

module.exports = {
    getClima
}