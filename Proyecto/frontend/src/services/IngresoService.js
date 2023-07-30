import axios from 'axios';

class IngresoService {

    createIngreso(ingreso){
        return axios.post("http://localhost:8082/ingreso", ingreso);
    }

    getIngreso(){
        return axios.get("http://localhost:8082/ingreso/lista-ingreso");
    }

}

export default new IngresoService()