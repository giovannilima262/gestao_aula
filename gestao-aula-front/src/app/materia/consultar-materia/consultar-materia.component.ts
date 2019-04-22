import { SalvarMateriaComponent } from './../salvar-materia/salvar-materia.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MateriaService } from 'src/app/service/materia.service';
import { ToastrService } from 'ngx-toastr';
import { Materia } from 'src/app/entity/materia';

@Component({
  selector: 'app-consultar-materia',
  templateUrl: './consultar-materia.component.html',
  styleUrls: ['./consultar-materia.component.css']
})
export class ConsultarMateriaComponent implements OnInit {

  formGroup: FormGroup;
  displayedColumns: string[] = ['nome', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private materiaService: MateriaService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<Materia>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.formGroup = this._formBuilder.group({
      nome: [''],
    });
    this.buscarMateria();
  }

  buscarMateria() {
    this.materiaService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogMateria(): void {
    const dialogRef = this.dialog.open(SalvarMateriaComponent, {
      width: '480px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarMateria();
    });
  }

  deletarMateria(idMateria) {
    this.materiaService.deletar(idMateria).subscribe(_ => {
      this.buscarMateria();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarMateria(materia: Materia) {
    const dialogRef = this.dialog.open(SalvarMateriaComponent, {
      width: '480px',
      data: materia
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarMateria();
    });
  }

}
