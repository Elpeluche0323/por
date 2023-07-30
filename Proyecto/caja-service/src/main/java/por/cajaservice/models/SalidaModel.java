package por.cajaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SalidaModel {
    private String fecha;
    private String tipo;
    private String numero;
    private String motivo;
    private Double salida;
}
