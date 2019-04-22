package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Sala;
import br.edu.ucsal.gestao_aula.repository.SalaCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaService {

    @Autowired
    private SalaCriteriaBuilderRepository salaCriteriaBuilderRepository;

    @Autowired
    private SalaRepository salaRepository;

    public void salvar(Sala sala) {
        salaRepository.save(sala);
    }

    public List<Sala> filtrar(Sala sala) {
        return salaCriteriaBuilderRepository.filtrar(sala);
    }

    public void deletar(Long id) {
        salaRepository.deleteById(id);
    }

    public List<Sala> findAll() {
        return salaRepository.findAll();
    }
}
