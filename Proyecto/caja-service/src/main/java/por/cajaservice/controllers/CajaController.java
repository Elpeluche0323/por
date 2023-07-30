package por.cajaservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import por.cajaservice.entities.CajaEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import por.cajaservice.services.CajaService;
import java.util.List;

@RestController
@RequestMapping("/caja")
public class CajaController {
    @Autowired
    CajaService cajaService;

    @GetMapping("/nuevo-caja")
    public String caja(){return "/nuevo-caja";}

    @PostMapping
    public void guardarCaja(@RequestBody CajaEntity caja){cajaService.guardarCaja(caja);}

    @GetMapping("/lista-caja")
    public ResponseEntity<List<CajaEntity>> obtenerCaja(){
        List<CajaEntity> caja = cajaService.obtenerCaja();
        if(caja.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(caja);
    }

}
