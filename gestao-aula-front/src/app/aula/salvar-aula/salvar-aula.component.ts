import { MateriaCursoService } from './../../service/materia-curso.service';
import { ImprevistoService } from './../../service/imprevisto.service';
import { Sala } from 'src/app/entity/sala';
import { Imprevisto } from './../../entity/imprevisto';
import { MateriaService } from 'src/app/service/materia.service';
import { CursoService } from './../../service/curso.service';
import { AulaService } from './../../service/aula.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aula } from './../../entity/aula';
import { Curso } from './../../entity/curso';
import { Materia } from 'src/app/entity/materia';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalaService } from 'src/app/service/sala.service';
import { MateriaCurso } from 'src/app/entity/materia-curso';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-salvar-aula',
  templateUrl: './salvar-aula.component.html',
  styleUrls: ['./salvar-aula.component.css']
})
export class SalvarAulaComponent implements OnInit {

  formGroup: FormGroup;
  salas: Array<Sala>[];
  imprevistos: Array<Imprevisto>[];
  cursoList: Array<Curso>[];
  materiaMateriaCursoList: Array<MateriaCurso>[];

  constructor(
    public dialogRef: MatDialogRef<SalvarAulaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aula,
    private _formBuilder: FormBuilder,
    private aulaService: AulaService,
    private salaService: SalaService,
    private imprevistoService: ImprevistoService,
    private cursoService: CursoService,
    private materiaCursoService: MateriaCursoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let imprevisto = null;
    if(this.data.imprevisto != null) {
      imprevisto = this.data.imprevisto.id;
    }
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      sala: [this.data.sala.id],
      curso: [this.data.materiaCurso.curso.id, Validators.required],
      materiaCurso: [this.data.materiaCurso.id, Validators.required],
      imprevisto: [imprevisto],
      data: [new Date(this.data.data), Validators.required],
      horarioInicio: [this.data.horarioInicio, Validators.required],
      horarioFim: [this.data.horarioFim, Validators.required]
    });
    this.buscarSala();
    this.buscarImprevisto();
    this.buscarMateriaCurso();
    if (this.data.id != null) {
      this.selecionarCurso(this.data.materiaCurso.curso.id);
    }
  }

  selecionarCurso(idCurso) {
    this.materiaCursoService.findByIdCurso(idCurso).subscribe(data => {
      this.materiaMateriaCursoList = data;
    }, error => {
      this.toastr.error('Error ao listar!');
      console.log(error);
    });
  }

  buscarMateriaCurso() {
    this.cursoService.findAll().subscribe(data => {
      this.cursoList = data;
    }, error => {
      this.toastr.error('Error ao listar!');
      console.log(error);
    });
  }

  buscarImprevisto() {
    this.imprevistoService.findAll().subscribe(data => {
      this.imprevistos = data;
    }, error => {
      this.toastr.error('Error ao listar!');
      console.log(error);
    });
  }

  buscarSala() {
    this.salaService.findAll().subscribe(data => {
      this.salas = data;
    }, error => {
      this.toastr.error('Error ao listar!');
      console.log(error);
    });
  }

  salvar(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios')
      return;
    }
    let aula = this.setAula();
    this.aulaService.salvar(aula).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

  setAula() {
    let aula = new Aula();
    aula.id = this.formGroup.value.id;
    aula.data = this.formGroup.value.data;
    aula.sala = new Sala();
    aula.sala.id = this.formGroup.value.sala;
    aula.imprevisto = new Imprevisto();
    aula.imprevisto.id = this.formGroup.value.imprevisto;
    aula.horarioFim = this.formGroup.value.horarioFim;
    aula.horarioInicio = this.formGroup.value.horarioInicio;
    aula.materiaCurso = new MateriaCurso();
    aula.materiaCurso.id = this.formGroup.value.materiaCurso;
    if(aula.imprevisto.id === null || aula.imprevisto.id === undefined) {
      aula.imprevisto = null;
    }
    return aula;
  }

}
