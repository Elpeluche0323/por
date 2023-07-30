package por.salidaservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import por.salidaservice.entities.SalidaEntity;
import por.salidaservice.repositories.SalidaRepository;

import java.util.ArrayList;

@Service
public class SalidaService {

    @Autowired
    SalidaRepository salidaRepository;

    public ArrayList<SalidaEntity> obtenerSalida(){return (ArrayList<SalidaEntity>) salidaRepository.findAll();}

    public void guardarSalida(SalidaEntity salida){salidaRepository.save(salida);}
}
