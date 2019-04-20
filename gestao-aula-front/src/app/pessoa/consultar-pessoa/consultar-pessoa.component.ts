import { SalvarPessoaComponentDialog } from './../salvar-pessoa/salvar-pessoa.component';
import { TipoPessoaEnum } from './../../enums/tipo-pessoa-enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consultar-pessoa',
  templateUrl: './consultar-pessoa.component.html',
  styleUrls: ['./consultar-pessoa.component.css']
})
export class ConsultarPessoaComponent implements OnInit {

  formGroup: FormGroup;
  tipos = TipoPessoaEnum;
  keysTipos = Object.values(TipoPessoaEnum);
  displayedColumns: string[] = ['nome', 'matricula', 'cpf', 'tipo'];

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }

  dataSource = new MatTableDataSource<Object>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      nome: [''],
      matricula: [''],
      cpf: [''],
      tipo: []
    });

  }

  dialogPessoa(): void {
    const dialogRef = this.dialog.open(SalvarPessoaComponentDialog, {
      width: '480px',
      data: {}
    });

  }

}
