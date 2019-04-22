package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MateriaCursoRepository extends JpaRepository<MateriaCurso, Long> {

    @Query(value = "Select mc from MateriaCurso mc where mc.curso.id = :idCurso")
    List<MateriaCurso> findByIdCurso(Long idCurso);

}
