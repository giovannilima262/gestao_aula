package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Curso;
import br.edu.ucsal.gestao_aula.model.Materia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {

}
