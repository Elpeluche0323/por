package por.salidaservice.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "salida")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SalidaEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fecha;
    private String tipo;
    private String numero;
    private String motivo;
    private Double salida;
}
