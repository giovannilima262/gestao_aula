import { Pessoa } from './../../entity/pessoa';
import { PessoaService } from './../../service/pessoa.service';
import { SalvarPessoaComponent } from './../salvar-pessoa/salvar-pessoa.component';
import { TipoPessoaEnum } from './../../enums/tipo-pessoa-enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consultar-pessoa',
  templateUrl: './consultar-pessoa.component.html',
  styleUrls: ['./consultar-pessoa.component.css']
})
export class ConsultarPessoaComponent implements OnInit {

  formGroup: FormGroup;
  tipos = TipoPessoaEnum;
  keysTipos = Object.values(TipoPessoaEnum);
  displayedColumns: string[] = ['nome', 'matricula', 'cpf', 'tipo', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private pessoaService: PessoaService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<Pessoa>([]);

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
    this.buscarPessoa();
  }

  buscarPessoa() {
    this.pessoaService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogPessoa(): void {
    const dialogRef = this.dialog.open(SalvarPessoaComponent, {
      width: '480px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarPessoa();
    });
  }

  deletarPessoa(idPessoa) {
    this.pessoaService.deletar(idPessoa).subscribe(_ => {
      this.buscarPessoa();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarPessoa(pessoa: Pessoa) {
    const dialogRef = this.dialog.open(SalvarPessoaComponent, {
      width: '480px',
      data: pessoa
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarPessoa();
    });
  }

}
