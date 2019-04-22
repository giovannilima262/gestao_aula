import { SalvarCursoComponent } from './../salvar-curso/salvar-curso.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { Curso } from 'src/app/entity/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-consultar-curso',
  templateUrl: './consultar-curso.component.html',
  styleUrls: ['./consultar-curso.component.css']
})
export class ConsultarCursoComponent implements OnInit {


  formGroup: FormGroup;
  displayedColumns: string[] = ['nome', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private cursoService: CursoService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<Curso>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.formGroup = this._formBuilder.group({
      nome: [''],
    });
    this.buscarCurso();
  }

  buscarCurso() {
    this.cursoService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogCurso(): void {
    const dialogRef = this.dialog.open(SalvarCursoComponent, {
      width: '480px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarCurso();
    });
  }

  deletarCurso(idCurso) {
    this.cursoService.deletar(idCurso).subscribe(_ => {
      this.buscarCurso();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarCurso(curso: Curso) {
    const dialogRef = this.dialog.open(SalvarCursoComponent, {
      width: '480px',
      data: curso
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarCurso();
    });
  }

}
