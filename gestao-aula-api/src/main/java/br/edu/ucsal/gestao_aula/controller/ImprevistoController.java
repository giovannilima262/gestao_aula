package br.edu.ucsal.gestao_aula.controller;

import br.edu.ucsal.gestao_aula.model.Imprevisto;
import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.service.ImprevistoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/imprevisto")
public class ImprevistoController {

    @Autowired
    private ImprevistoService imprevistoService;

    @GetMapping("/")
    public ResponseEntity<List<Imprevisto>> findAll() {
        return ResponseEntity.ok(imprevistoService.findAll());
    }

    @PostMapping("filtrar")
    public ResponseEntity<List<Imprevisto>> filtrar(@RequestBody Imprevisto imprevisto) {
        return ResponseEntity.ok(imprevistoService.filtrar(imprevisto));
    }

    @PostMapping("/")
    public ResponseEntity<Object> salvar(@RequestBody Imprevisto imprevisto) {
        imprevistoService.salvar(imprevisto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletar(@PathVariable Long id) {
        imprevistoService.deletar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
