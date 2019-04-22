package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import br.edu.ucsal.gestao_aula.repository.MateriaCursoCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.MateriaCursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MateriaCursoService {

    @Autowired
    private MateriaCursoCriteriaBuilderRepository materiaCursoCriteriaBuilderRepository;

    @Autowired
    private MateriaCursoRepository materiaCursoRepository;

    public void salvar(MateriaCurso materiaCurso) {
        materiaCursoRepository.save(materiaCurso);
    }

    public List<MateriaCurso> filtrar(MateriaCurso materiaCurso) {
        return materiaCursoCriteriaBuilderRepository.filtrar(materiaCurso);
    }

    public void deletar(Long id) {
        materiaCursoRepository.deleteById(id);
    }

    public List<MateriaCurso> findAll() {
        return materiaCursoRepository.findAll();
    }

    public List<MateriaCurso> findByIdCurso(Long idCurso) {
        return materiaCursoRepository.findByIdCurso(idCurso);
    }

}
