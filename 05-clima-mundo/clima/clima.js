const axios = require('axios'),
    getClima = async(lat, lng) => {
        //let encodedURL = encodeURI(direccion);
        let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5ab77bfb4c4098cb2bf0cab5f5d2ac06`)
            //console.log(resp.data.cod);
        if (resp.data.cod == '400') {
            throw new Error(`No hay resultados para la ciudad `)
        } else {
            return resp.data.main.temp;
        }

    }

module.exports = {
    getClima
}