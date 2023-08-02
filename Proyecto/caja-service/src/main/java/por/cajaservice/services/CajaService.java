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

    public CajaEntity crearNuevaCaja(IngresoModel ingreso) {
        CajaEntity nuevaCaja = new CajaEntity();
        nuevaCaja.setFecha(ingreso.getFecha());
        nuevaCaja.setTipo(ingreso.getTipo());
        nuevaCaja.setNumero(ingreso.getNumero());
        nuevaCaja.setMotivo(ingreso.getMotivo());
        nuevaCaja.setIngreso(ingreso.getIngreso());
        nuevaCaja.setSalida(null);
        nuevaCaja.setSaldo(calcularSaldoActual(ingreso.getIngreso()));
        cajaRepository.crearNuevaCaja(nuevaCaja);
        return nuevaCaja;
    }


    public CajaEntity crearNuevaCaja2(SalidaModel salida) {
        CajaEntity nuevaCaja = new CajaEntity();
        nuevaCaja.setFecha(salida.getFecha());
        nuevaCaja.setTipo(salida.getTipo());
        nuevaCaja.setNumero(salida.getNumero());
        nuevaCaja.setMotivo(salida.getMotivo());
        nuevaCaja.setIngreso(null);
        nuevaCaja.setSalida(salida.getSalida());
        nuevaCaja.setSaldo(calcularSaldoActual2(salida.getSalida()));
        cajaRepository.crearNuevaCaja(nuevaCaja);
        return nuevaCaja;
    }


    private Double calcularSaldoActual(Double ingreso){
        int indice = obtenerCaja().size() -1;
        Double saldoActual = obtenerCaja().get(indice).getSaldo();
        saldoActual = saldoActual + ingreso;
        return saldoActual;
    }

    private Double calcularSaldoActual2(Double salida){
        int indice = obtenerCaja().size() -1;
        Double saldoActual = obtenerCaja().get(indice).getSaldo();
        saldoActual = saldoActual - salida;
        return saldoActual;
    }

    public List<IngresoModel> obtenerIngreso(){
        List<IngresoModel> ingreso = restTemplate.getForObject("http://ingreso-service/ingreso/lista-ingreso",List.class);
        return ingreso;
    }

    public List<SalidaModel> obtenerSalida(){
        List<SalidaModel> salida = restTemplate.getForObject("http://salida-service/salida/lista-salida",List.class);
        return salida;
    }


}
