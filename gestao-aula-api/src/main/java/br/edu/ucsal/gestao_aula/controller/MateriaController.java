package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.service.MateriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/materia")
public class MateriaController {

    @Autowired
    private MateriaService materiaService;

    @PostMapping("filtrar")
    public ResponseEntity<List<Materia>> filtrarPessoa(@RequestBody Materia materia) {
        return ResponseEntity.ok(materiaService.filtrar(materia));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Materia materia) {
        materiaService.salvar(materia);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        materiaService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
