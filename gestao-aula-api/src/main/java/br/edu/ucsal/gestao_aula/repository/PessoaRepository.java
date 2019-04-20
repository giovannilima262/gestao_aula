package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
