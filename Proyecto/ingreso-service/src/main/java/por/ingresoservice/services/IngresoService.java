package por.ingresoservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import por.ingresoservice.entities.IngresoEntity;
import por.ingresoservice.repositories.IngresoRepository;

import java.util.ArrayList;

@Service
public class IngresoService {

    @Autowired
    IngresoRepository ingresoRepository;

    public ArrayList<IngresoEntity> obtenerIngreso(){return (ArrayList<IngresoEntity>) ingresoRepository.findAll();}

    public void guardarIngreso(IngresoEntity ingreso){ingresoRepository.save(ingreso);}
}
