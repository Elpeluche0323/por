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

    @GetMapping("/ingreso")
    public List<CajaEntity> obtenerIngreso(){return cajaService.obtenerIngreso();}

    @GetMapping("/salida")
    public List<CajaEntity> obtenerSalida(){return cajaService.obtenerSalida();}

    /**
    @GetMapping("/nueva-ingreso")
    public String ingreso(){return "/nuevo-ingreso";}

    @GetMapping("/nueva-salida")
    public String salida(){return "/nuevo-salida";}
     **/



    @PostMapping("/nuevo-ingreso")
    public void guardarIngreso(@RequestBody CajaEntity caja){ cajaService.guardarIngreso(caja);}

    @PostMapping("/nuevo-salida")
    public void guardarSalida(@RequestBody CajaEntity caja){ cajaService.guardarSalida(caja);}

    @GetMapping("/lista-caja")
    public ResponseEntity<List<CajaEntity>> obtenerCaja(){
        List<CajaEntity> caja = cajaService.obtenerCaja();
        if(caja.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(caja);
    }

}
