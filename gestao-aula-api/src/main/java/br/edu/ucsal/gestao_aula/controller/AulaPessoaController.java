package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.AulaPessoa;
import br.edu.ucsal.gestao_aula.service.AulaPessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/aula/pessoa")
public class AulaPessoaController {

    @Autowired
    private AulaPessoaService aulaPessoaService;

    @GetMapping("pessoas/aula/{idAula}")
    public ResponseEntity<List<AulaPessoa>> buscarPessoaPorIdAula(@PathVariable Long idAula) {
        return ResponseEntity.ok(aulaPessoaService.buscarPessoaPorIdAula(idAula));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody AulaPessoa aulaPessoa) {
        aulaPessoaService.salvar(aulaPessoa);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        aulaPessoaService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
