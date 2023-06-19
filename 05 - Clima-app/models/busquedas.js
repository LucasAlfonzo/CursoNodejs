const axios = require('axios');

class Busqueda{
    historial = [];
    constructor(){
        //Leer DB 
    }

    async ciudad(lugar = ''){
        const resp = await axios.get('https://reqres.in/api/users?page=2');
        console.log(resp.data.data);
        return []//RETORNAR LOS LUGARES QUE COINCIDAN CON EL LUGAR INGRESADO
    }

}

module.exports = Busqueda;