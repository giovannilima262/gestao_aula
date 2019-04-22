package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import br.edu.ucsal.gestao_aula.repository.AulaCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.AulaRepository;
import br.edu.ucsal.gestao_aula.repository.MateriaCursoCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.MateriaCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AulaService {

    @Autowired
    private AulaCriteriaBuilderRepository aulaCriteriaBuilderRepository;

    @Autowired
    private AulaRepository aulaRepository;

    public void salvar(Aula aula) {
        aulaRepository.save(aula);
    }

    public List<Aula> filtrar(Aula aula) {
        return aulaCriteriaBuilderRepository.filtrar(aula);
    }

    public void deletar(Long id) {
        aulaRepository.deleteById(id);
    }

    public List<Aula> findAll() {
        return aulaRepository.findAll();
    }
}
