package por.salidaservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import por.salidaservice.entities.SalidaEntity;
import por.salidaservice.services.SalidaService;

import java.util.List;

@RestController
@RequestMapping("/salida")
public class SalidaController {
    @Autowired
    SalidaService salidaService;

    @GetMapping("/nuevo-salida")
    public String salida(){return "/nuevo-salida";}

    @PostMapping
    public void guardarSalida(@RequestBody SalidaEntity salida){ salidaService.guardarSalida(salida);}

    @GetMapping("/lista-salida")
    public ResponseEntity<List<SalidaEntity>> obtenerSalida(){
        List<SalidaEntity> salida = salidaService.obtenerSalida();
        if(salida.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(salida);
    }
}
