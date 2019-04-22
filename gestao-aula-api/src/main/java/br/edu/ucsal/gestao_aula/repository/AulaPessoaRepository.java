package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.AulaPessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AulaPessoaRepository extends JpaRepository<AulaPessoa, Long> {

    @Query(value = "Select ap from AulaPessoa ap join ap.aula a where a.id = :idAula")
    List<AulaPessoa> buscarPessoaPorIdAula(Long idAula);
}
