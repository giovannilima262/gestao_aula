package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.Materia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AulaRepository extends JpaRepository<Aula, Long> {

}
