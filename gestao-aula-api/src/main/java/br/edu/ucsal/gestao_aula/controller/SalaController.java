package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.model.Sala;
import br.edu.ucsal.gestao_aula.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/sala")
public class SalaController {

    @Autowired
    private SalaService salaService;

    @GetMapping("/")
    public ResponseEntity<List<Sala>> findAll() {
        return ResponseEntity.ok(salaService.findAll());
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<Sala>> filtrar(@RequestBody Sala sala) {
        return ResponseEntity.ok(salaService.filtrar(sala));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Sala sala) {
        salaService.salvar(sala);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        salaService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
