package por.ingresoservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import por.ingresoservice.entities.IngresoEntity;
@Repository
public interface IngresoRepository extends JpaRepository<IngresoEntity, Integer> {
}
