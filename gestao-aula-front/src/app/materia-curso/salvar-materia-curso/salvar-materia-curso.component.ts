import { MateriaService } from 'src/app/service/materia.service';
import { CursoService } from './../../service/curso.service';
import { MateriaCursoService } from './../../service/materia-curso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriaCurso } from './../../entity/materia-curso';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Materia } from 'src/app/entity/materia';
import { Curso } from 'src/app/entity/curso';

@Component({
  selector: 'app-salvar-materia-curso',
  templateUrl: './salvar-materia-curso.component.html',
  styleUrls: ['./salvar-materia-curso.component.css']
})
export class SalvarMateriaCursoComponent implements OnInit {

  formGroup: FormGroup;
  materias: Array<Materia>[];
  cursos: Array<Curso>[];

  constructor(
    public dialogRef: MatDialogRef<SalvarMateriaCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MateriaCurso,
    private _formBuilder: FormBuilder,
    private materiaCursoService: MateriaCursoService,
    private cursoService: CursoService,
    private materiaService: MateriaService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      materia: [this.data.materia.id, Validators.required],
      curso: [this.data.curso.id, Validators.required]
    });
    this.buscarMateria();
    this.buscarCurso();
  }

  buscarCurso() {
    this.cursoService.findAll().subscribe(data => {
      this.cursos = data;
    }, error => {
      this.toastr.error('Error ao listar!');
      console.log(error);
    });
  }

  buscarMateria() {
    this.materiaService.findAll().subscribe(data => {
      this.materias = data;
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
    let materiaCurso = this.setMateriaCurso();
    this.materiaCursoService.salvar(materiaCurso).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

  setMateriaCurso() {
    let materiaCurso = new MateriaCurso();
    materiaCurso.materia = new Materia();
    materiaCurso.id = this.formGroup.value.id;
    materiaCurso.materia.id = this.formGroup.value.materia;
    materiaCurso.curso = new Curso();
    materiaCurso.curso.id = this.formGroup.value.curso;
    return materiaCurso;
  }

}
