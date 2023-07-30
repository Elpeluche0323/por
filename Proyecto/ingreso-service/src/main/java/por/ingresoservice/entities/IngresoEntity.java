package por.ingresoservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "ingreso")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class IngresoEntity {
    @Id
    @NonNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String fecha;
    private String tipo;
    private String numero;
    private String motivo;
    private Double ingreso;
}

