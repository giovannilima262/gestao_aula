package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

}
