package br.edu.ucsal.gestao_aula.service;

import br.edu.ucsal.gestao_aula.model.Imprevisto;
import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.repository.ImprevistoCriteriaBuilderRepository;
import br.edu.ucsal.gestao_aula.repository.ImprevistoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImprevistoService {

    @Autowired
    private ImprevistoCriteriaBuilderRepository imprevistoCriteriaBuilderRepository;

    @Autowired
    private ImprevistoRepository imprevistoRepository;

    public void salvar(Imprevisto imprevisto) {
        imprevistoRepository.save(imprevisto);
    }

    public List<Imprevisto> filtrar(Imprevisto imprevisto) {
        return imprevistoCriteriaBuilderRepository.filtrar(imprevisto);
    }

    public void deletar(Long id) {
        imprevistoRepository.deleteById(id);
    }

    public List<Imprevisto> findAll() {
        return imprevistoRepository.findAll();
    }
}
