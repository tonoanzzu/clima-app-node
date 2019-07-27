const axios = require('axios');

const getClima = async (lat, lng) =>{
    
    
     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b5fec259c864e659b963e2282674daf5&units=metric`);

      return resp.data.main.temp;
}

module.exports= {
    getClima
}