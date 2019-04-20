package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping("filtrar")
    public List<Pessoa> filtrarPessoa(@RequestBody Pessoa pessoa) {
        return null;
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Pessoa pessoa) {
        pessoaService.salvar(pessoa);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
