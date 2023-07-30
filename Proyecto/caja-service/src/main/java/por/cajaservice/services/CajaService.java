package por.cajaservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import por.cajaservice.entities.CajaEntity;
import por.cajaservice.models.IngresoModel;
import por.cajaservice.models.SalidaModel;
import por.cajaservice.repositories.CajaRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CajaService {

    @Autowired
    CajaRepository cajaRepository;
    @Autowired
    RestTemplate restTemplate;

    public ArrayList<CajaEntity> obtenerCaja(){
        return (ArrayList<CajaEntity>) cajaRepository.findAll();
    }

    public void guardarCaja(CajaEntity caja){cajaRepository.save(caja);}

    public List<IngresoModel> obtenerIngreso(){
        List<IngresoModel> ingreso = restTemplate.getForObject("http://ingreso-service/ingreso/lista-ingreso",List.class);
        return ingreso;
    }

    public List<SalidaModel> obtenerSalida(){
        List<SalidaModel> salida = restTemplate.getForObject("http://salida-service/salida/lista-salida",List.class);
        return salida;
    }

}
