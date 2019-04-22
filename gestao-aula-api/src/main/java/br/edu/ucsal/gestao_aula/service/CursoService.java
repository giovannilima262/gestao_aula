package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Curso;
import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.repository.CursoCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoCriteriaBuilderRepository cursoCriteriaBuilderRepository;

    @Autowired
    private CursoRepository cursoRepository;

    public void salvar(Curso curso) {
        cursoRepository.save(curso);
    }

    public List<Curso> filtrar(Curso curso) {
        return cursoCriteriaBuilderRepository.filtrar(curso);
    }

    public void deletar(Long id) {
        cursoRepository.deleteById(id);
    }

    public List<Curso> findAll() {
        return cursoRepository.findAll();
    }
}
