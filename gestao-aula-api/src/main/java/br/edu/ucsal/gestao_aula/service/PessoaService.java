package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.repository.PessoaCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaCriteriaBuilderRepository pessoaCriteriaBuilderRepository;

    @Autowired
    private PessoaRepository pessoaRepository;

    public void salvar(Pessoa pessoa) {
        pessoaRepository.save(pessoa);
    }

    public List<Pessoa> filtrar(Pessoa pessoa) {
        return pessoaCriteriaBuilderRepository.filtrar(pessoa);
    }

    public void deletar(Long id) {
        pessoaRepository.deleteById(id);
    }
}
