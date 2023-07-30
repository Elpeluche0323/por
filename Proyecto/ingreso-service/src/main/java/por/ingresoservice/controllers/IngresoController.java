package por.ingresoservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import por.ingresoservice.entities.IngresoEntity;
import por.ingresoservice.services.IngresoService;

import java.util.List;

@RestController
@RequestMapping("/ingreso")
public class IngresoController {
    @Autowired
    IngresoService ingresoService;

    @GetMapping("/nuevo-ingreso")
    public String ingreso(){return "/nuevo-ingreso";}

    @PostMapping
    public void guardarIngreso(@RequestBody IngresoEntity ingreso){ ingresoService.guardarIngreso(ingreso);}

    @GetMapping("/lista-ingreso")
    public ResponseEntity<List<IngresoEntity>> obtenerIngreso(){
        List<IngresoEntity> ingreso = ingresoService.obtenerIngreso();
        if(ingreso.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(ingreso);
    }

}

