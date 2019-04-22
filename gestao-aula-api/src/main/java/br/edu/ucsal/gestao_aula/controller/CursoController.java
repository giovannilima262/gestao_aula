package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Curso;
import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/curso")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @GetMapping("/")
    public ResponseEntity<List<Curso>> findAll() {
        return ResponseEntity.ok(cursoService.findAll());
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<Curso>> filtrar(@RequestBody Curso curso) {
        return ResponseEntity.ok(cursoService.filtrar(curso));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Curso curso) {
        cursoService.salvar(curso);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        cursoService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
