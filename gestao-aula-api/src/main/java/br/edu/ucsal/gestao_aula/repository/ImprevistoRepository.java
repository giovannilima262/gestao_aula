package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Imprevisto;
import br.edu.ucsal.gestao_aula.model.Sala;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImprevistoRepository extends JpaRepository<Imprevisto, Long> {

}
