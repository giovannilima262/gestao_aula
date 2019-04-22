import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AulaPessoa } from './../../entity/aula-pessoa';
import { MateriaCursoService } from './../../service/materia-curso.service';
import { ImprevistoService } from './../../service/imprevisto.service';
import { Sala } from 'src/app/entity/sala';
import { Imprevisto } from './../../entity/imprevisto';
import { MateriaService } from 'src/app/service/materia.service';
import { CursoService } from './../../service/curso.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aula } from './../../entity/aula';
import { Curso } from './../../entity/curso';
import { Materia } from 'src/app/entity/materia';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SalaService } from 'src/app/service/sala.service';
import { MateriaCurso } from 'src/app/entity/materia-curso';
import { DatePipe } from '@angular/common';
import { LocalStorageService } from 'angular-web-storage';
import { AulaService } from 'src/app/service/aula.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/entity/pessoa';
import { PessoaService } from 'src/app/service/pessoa.service';
import { TipoPessoaEnum } from 'src/app/enums/tipo-pessoa-enum';
import { AulaPessoaService } from 'src/app/service/aula-pessoa.service';

@Component({
  selector: 'app-consultar-aula-pessoa',
  templateUrl: './consultar-aula-pessoa.component.html',
  styleUrls: ['./consultar-aula-pessoa.component.css']
})
export class ConsultarAulaPessoaComponent implements OnInit {

  formGroup: FormGroup;
  formGroupIncluir: FormGroup;
  salas: Array<Sala>[];
  imprevistos: Array<Imprevisto>[];
  cursoList: Array<Curso>[];
  materiaMateriaCursoList: Array<MateriaCurso>[];
  data: Aula;
  pessoas: Array<Pessoa>[];

  dataSource = new MatTableDataSource<Pessoa>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  tipos = TipoPessoaEnum;
  keysTipos = Object.values(TipoPessoaEnum);
  displayedColumns: string[] = ['nome', 'tipo', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private salaService: SalaService,
    private imprevistoService: ImprevistoService,
    private cursoService: CursoService,
    private materiaCursoService: MateriaCursoService,
    private toastr: ToastrService,
    private localStorage: LocalStorageService,
    private router: Router,
    private aulaPessoaService: AulaPessoaService
  ) { }

  ngOnInit() {
    this.data = this.localStorage.get("aula");
    let imprevisto = null;
    if (this.data.imprevisto != null) {
      imprevisto = this.data.imprevisto.id;
    }
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      sala: [this.data.sala.id],
      curso: [this.data.materiaCurso.curso.id],
      materiaCurso: [this.data.materiaCurso.id],
      imprevisto: [imprevisto],
      data: [new Date(this.data.data)],
      horarioInicio: [this.data.horarioInicio],
      horarioFim: [this.data.horarioFim]
    });
    this.formGroup.disable();
    this.formGroupIncluir = this._formBuilder.group({
      pessoa: [],
    });
    this.buscarSala();
    this.buscarImprevisto();
    this.buscarMateriaCurso();
    if (this.data.id != null) {
      this.selecionarCurso(this.data.materiaCurso.curso.id);
    }
    this.buscarPessoas();
    this.buscarPessoasAula();
  }

  buscarPessoas() {
    this.pessoaService.findAll().subscribe(data => {
      this.pessoas = data;
    }, error => {
      console.log(error);
    });
  }

  buscarPessoasAula() {
    this.aulaPessoaService.buscarPessoaPorIdAula(this.data.id).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
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

  incluirPessoa(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios');
      return;
    }
    let aulaPessoa = new AulaPessoa();
    aulaPessoa.aula = new Aula();
    aulaPessoa.aula.id = this.data.id;
    aulaPessoa.pessoa = new Pessoa();
    aulaPessoa.pessoa.id = this.formGroupIncluir.value.pessoa;
    this.aulaPessoaService.salvar(aulaPessoa).subscribe(_ => {
      this.toastr.success('Pessoa salva com sucesso!');
      this.buscarPessoasAula();
    }, error => {
      console.log(error);
    });
  }

  deletarAulaPessoa(idAulaPessoa) {
    this.aulaPessoaService.deletar(idAulaPessoa).subscribe(_ => {
      this.toastr.success('Pessoa excluida com sucesso!');
      this.buscarPessoasAula();
    }, error => {
      console.log(error);
    });
  }

  voltar() {
    this.router.navigate(['consultar/aula']);
  }

}
