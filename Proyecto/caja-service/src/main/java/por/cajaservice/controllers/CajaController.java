package por.cajaservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import por.cajaservice.entities.CajaEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import por.cajaservice.models.IngresoModel;
import por.cajaservice.models.SalidaModel;
import por.cajaservice.services.CajaService;
import java.util.List;

@RestController
@RequestMapping("/caja")
public class CajaController {
    @Autowired
    CajaService cajaService;

    @PostMapping("/nueva-caja")
    public ResponseEntity<CajaEntity> crearNuevaCaja(@RequestBody IngresoModel ingreso) {
        CajaEntity caja = cajaService.crearNuevaCaja(ingreso);
        return ResponseEntity.ok(caja);
    }

    @PostMapping("/nueva-caja2")
    public ResponseEntity<CajaEntity> crearNuevaCaja2(@RequestBody SalidaModel salida) {
        CajaEntity caja = cajaService.crearNuevaCaja2(salida);
        return ResponseEntity.ok(caja);
    }


    @GetMapping("/lista-caja")
    public ResponseEntity<List<CajaEntity>> obtenerCaja(){
        List<CajaEntity> caja = cajaService.obtenerCaja();
        if(caja.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(caja);
    }

}
