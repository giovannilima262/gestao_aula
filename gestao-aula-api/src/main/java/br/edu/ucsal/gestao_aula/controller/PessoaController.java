package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.model.Sala;
import br.edu.ucsal.gestao_aula.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;


    @GetMapping("/")
    public ResponseEntity<List<Pessoa>> findAll() {
        return ResponseEntity.ok(pessoaService.findAll());
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<Pessoa>> filtrar(@RequestBody Pessoa pessoa) {
        return ResponseEntity.ok(pessoaService.filtrar(pessoa));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvar(pessoa);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        pessoaService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
