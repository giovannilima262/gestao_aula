package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.AulaPessoa;
import br.edu.ucsal.gestao_aula.repository.AulaPessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AulaPessoaService {

    @Autowired
    private AulaPessoaRepository aulaPessoaRepository;

    public void salvar(AulaPessoa aulaPessoa) {
        aulaPessoaRepository.save(aulaPessoa);
    }

    public void deletar(Long id) {
        aulaPessoaRepository.deleteById(id);
    }

    public List<AulaPessoa> buscarPessoaPorIdAula(Long idAula) {
        return aulaPessoaRepository.buscarPessoaPorIdAula(idAula);
    }
}
