import { MateriaCursoService } from './../../service/materia-curso.service';
import { CursoService } from './../../service/curso.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MateriaCurso } from './../../entity/materia-curso';
import { MateriaService } from 'src/app/service/materia.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalvarMateriaCursoComponent } from '../salvar-materia-curso/salvar-materia-curso.component';
import { Materia } from 'src/app/entity/materia';
import { Curso } from 'src/app/entity/curso';

@Component({
  selector: 'app-consultar-materia-curso',
  templateUrl: './consultar-materia-curso.component.html',
  styleUrls: ['./consultar-materia-curso.component.css']
})
export class ConsultarMateriaCursoComponent implements OnInit {

  formGroup: FormGroup;
  displayedColumns: string[] = ['materia', 'curso', 'acoes'];
  materias: Array<Materia>[];
  cursos: Array<Curso>[];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private materiaService: MateriaService,
    private materiaCursoService: MateriaCursoService,
    private cursoService: CursoService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<MateriaCurso>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.formGroup = this._formBuilder.group({
      materia: [],
      curso: []
    });
    this.buscarMateriaCurso();
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

  buscarMateriaCurso() {
    this.materiaCursoService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogMateriaCurso(): void {
    let materiaCurso = new MateriaCurso();
    materiaCurso.materia = new Materia();
    materiaCurso.curso = new Curso();
    const dialogRef = this.dialog.open(SalvarMateriaCursoComponent, {
      width: '480px',
      data: materiaCurso
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarMateriaCurso();
    });
  }

  deletarMateriaCurso(idMateriaCurso) {
    this.materiaCursoService.deletar(idMateriaCurso).subscribe(_ => {
      this.buscarMateriaCurso();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarMateriaCurso(materiaCurso: MateriaCurso) {
    const dialogRef = this.dialog.open(SalvarMateriaCursoComponent, {
      width: '480px',
      data: materiaCurso
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarMateriaCurso();
    });
  }

}
