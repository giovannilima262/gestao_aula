package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import br.edu.ucsal.gestao_aula.service.AulaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/aula")
public class AulaController {

    @Autowired
    private AulaService aulaService;

    @GetMapping("/")
    public ResponseEntity<List<Aula>> findAll() {
        return ResponseEntity.ok(aulaService.findAll());
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<Aula>> filtrar(@RequestBody Aula aula) {
        return ResponseEntity.ok(aulaService.filtrar(aula));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Aula aula) {
        aulaService.salvar(aula);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        aulaService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
