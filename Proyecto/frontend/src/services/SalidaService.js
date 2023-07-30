import axios from 'axios';

class SalidaService {

    createSalida(salida){
        return axios.post("http://localhost:8083/salida", salida);
    }

    getSalida(){
        return axios.get("http://localhost:8083/salida/lista-salida");
    }

}

export default new SalidaService()