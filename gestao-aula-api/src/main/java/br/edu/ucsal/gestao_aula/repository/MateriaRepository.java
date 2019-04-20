package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MateriaRepository extends JpaRepository<Materia, Long> {

    List<Materia> findByNomeOrderByNome(String nome);

}
