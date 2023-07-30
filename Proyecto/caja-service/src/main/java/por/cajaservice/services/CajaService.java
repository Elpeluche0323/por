package por.cajaservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import por.cajaservice.entities.CajaEntity;
import por.cajaservice.repositories.CajaRepository;

import java.util.ArrayList;

@Service
public class CajaService {

    @Autowired
    CajaRepository cajaRepository;

    public ArrayList<CajaEntity> obtenerCaja(){
        return (ArrayList<CajaEntity>) cajaRepository.findAll();
    }

    public void guardarCaja(CajaEntity caja){cajaRepository.save(caja);}
}
