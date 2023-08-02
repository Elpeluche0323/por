import axios from 'axios';

class CajaService {

    createCaja(caja){
        return axios.post("http://localhost:8080/caja/nueva-caja", caja);
    }

    createCaja2(caja){
        return axios.post("http://localhost:8080/caja/nueva-caja2", caja);
    }

    getCaja(){
        return axios.get("http://localhost:8080/caja/lista-caja");
    }

}

export default new CajaService()