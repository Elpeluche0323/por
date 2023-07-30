import axios from 'axios';

class CajaService {

    createCaja(caja){
        return axios.post("http://localhost:8084/caja", caja);
    }

    getCaja(){
        return axios.get("http://localhost:8084/caja/lista-caja");
    }

}

export default new CajaService()