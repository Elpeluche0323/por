package por.cajaservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import por.cajaservice.entities.CajaEntity;

import java.util.List;

@Repository
public interface CajaRepository extends JpaRepository<CajaEntity, Integer> {
}
