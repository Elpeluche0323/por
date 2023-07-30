package por.cajaservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import por.cajaservice.entities.CajaEntity;
import por.cajaservice.repositories.CajaRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CajaService {

    @Autowired
    CajaRepository cajaRepository;

    public ArrayList<CajaEntity> obtenerCaja(){
        return (ArrayList<CajaEntity>) cajaRepository.findAll();
    }

    public List<CajaEntity> obtenerIngreso(){return cajaRepository.obtenerIngreso();}

    public List<CajaEntity> obtenerSalida(){return cajaRepository.obtenerSalida();}

    public void guardarIngreso(CajaEntity caja){cajaRepository.save(caja);}

    public void guardarSalida(CajaEntity caja){cajaRepository.save(caja);}
}
