import axios from 'axios';

class SalidaService {

    createSalida(salida){
        return axios.post("http://localhost:8080/salida", salida);
    }

    getSalida(){
        return axios.get("http://localhost:8080/salida/lista-salida");
    }

}

export default new SalidaService()