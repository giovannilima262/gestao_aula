package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Aula;
import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import br.edu.ucsal.gestao_aula.service.MateriaCursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/materia/curso")
public class MateriaCursoController {

    @Autowired
    private MateriaCursoService materiaCursoService;

    @GetMapping("/")
    public ResponseEntity<List<MateriaCurso>> findAll() {
        return ResponseEntity.ok(materiaCursoService.findAll());
    }

    @GetMapping("idCurso/{idCurso}")
    public ResponseEntity<List<MateriaCurso>> findByIdCurso(@PathVariable Long idCurso) {
        return ResponseEntity.ok(materiaCursoService.findByIdCurso(idCurso));
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<MateriaCurso>> filtrar(@RequestBody MateriaCurso materiaCurso) {
        return ResponseEntity.ok(materiaCursoService.filtrar(materiaCurso));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody MateriaCurso materiaCurso) {
        materiaCursoService.salvar(materiaCurso);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        materiaCursoService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
