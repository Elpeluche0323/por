package por.salidaservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import por.salidaservice.entities.SalidaEntity;

@Repository
public interface SalidaRepository extends JpaRepository<SalidaEntity, Integer> {
}
