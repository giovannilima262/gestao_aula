package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.repository.MateriaCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.MateriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MateriaService {

    @Autowired
    private MateriaCriteriaBuilderRepository materiaCriteriaBuilderRepository;

    @Autowired
    private MateriaRepository materiaRepository;

    public void salvar(Materia materia) {
        materiaRepository.save(materia);
    }

    public List<Materia> filtrar(Materia materia) {
        return materiaCriteriaBuilderRepository.filtrar(materia);
    }

    public void deletar(Long id) {
        materiaRepository.deleteById(id);
    }

    public List<Materia> findAll() {
        return materiaRepository.findAll();
    }
}
