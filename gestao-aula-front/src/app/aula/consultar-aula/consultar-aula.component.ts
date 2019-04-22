import { MateriaCursoService } from './../../service/materia-curso.service';
import { ImprevistoEnum } from 'src/app/enums/status-imprevisto-enum';
import { SalvarAulaComponent } from './../salvar-aula/salvar-aula.component';
import { MatTableDataSource } from '@angular/material/table';
import { CursoService } from 'src/app/service/curso.service';
import { MateriaService } from 'src/app/service/materia.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Materia } from './../../entity/materia';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/entity/curso';
import { ToastrService } from 'ngx-toastr';
import { Aula } from 'src/app/entity/aula';
import { MatPaginator } from '@angular/material/paginator';
import { MateriaCurso } from 'src/app/entity/materia-curso';
import { Sala } from 'src/app/entity/sala';
import { Imprevisto } from 'src/app/entity/imprevisto';
import { AulaService } from 'src/app/service/aula.service';
import { SalaService } from 'src/app/service/sala.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { ExcelService } from 'src/app/service/excel-service';

@Component({
  selector: 'app-consultar-aula',
  templateUrl: './consultar-aula.component.html',
  styleUrls: ['./consultar-aula.component.css']
})
export class ConsultarAulaComponent implements OnInit {

  formGroup: FormGroup;
  displayedColumns: string[] = ['sala', 'data', 'horarioInicio', 'horarioFim', 'materia', 'curso', 'imprevisto', 'acoes'];
  cursoList: Array<Curso>[];
  materiaMateriaCursoList: Array<MateriaCurso>[];
  salas: Array<Sala>[];
  tipos = ImprevistoEnum;
  keysTipos = Object.values(ImprevistoEnum);

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private materiaCursoService: MateriaCursoService,
    private aulaService: AulaService,
    private cursoService: CursoService,
    private salaService: SalaService,
    private toastr: ToastrService,
    public datepipe: DatePipe,
    private router: Router,
    private localStorage: LocalStorageService,
    private excelService: ExcelService,
  ) { }

  dataSource = new MatTableDataSource<Aula>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.dataSource.paginator = this.paginator;
    this.formGroup = this._formBuilder.group({
      sala: [],
      data: [],
      horarioInicio: [],
      horarioFim: [],
      materiaCurso: [],
      curso: [],
      status: []
    });
    this.buscarAula();
    this.buscarMateriaCurso();
    this.buscarSala();
  }

  buscarSala() {
    this.salaService.findAll().subscribe(data => {
      this.salas = data;
    }, error => {
      this.toastr.error('Error ao listar!');
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

  setAula() {
    let aula = new Aula();
    aula.data = this.formGroup.value.data;
    aula.sala = this.formGroup.value.sala;
    aula.imprevisto = new Imprevisto();
    aula.imprevisto.status = this.formGroup.value.status;
    aula.horarioFim = this.formGroup.value.horarioFim;
    aula.horarioInicio = this.formGroup.value.horarioInicio;
    aula.materiaCurso = new MateriaCurso();
    aula.materiaCurso.id = this.formGroup.value.materiaCurso;
    return aula;
  }

  descricaoImprevisto(imprevisto: Imprevisto) {
    if(imprevisto != null) {
      return imprevisto.descricao;
    }
    return "[Nenhum]";
  }

  buscarAula() {
    let aula = this.setAula();
    this.aulaService.filtrar(aula).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogAula(): void {
    let aula = new Aula();
    aula.materiaCurso = new MateriaCurso();
    aula.sala = new Sala();
    aula.imprevisto = new Imprevisto();
    aula.materiaCurso.curso = new Curso();
    aula.materiaCurso.materia = new Materia();
    const dialogRef = this.dialog.open(SalvarAulaComponent, {
      width: '480px',
      data: aula
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarAula();
    });
  }

  deletarAula(idAula) {
    this.aulaService.deletar(idAula).subscribe(_ => {
      this.buscarAula();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarAula(aula: Aula) {
    const dialogRef = this.dialog.open(SalvarAulaComponent, {
      width: '480px',
      data: aula
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarAula();
    });
  }

  pessoaAula(aula: Aula) {
    this.localStorage.set("aula", aula);
    this.router.navigate(['consultar/aula/pessoa']);
  }

  exportAsXLSX():void {
    let aulas = [];
    
    for (let index = 0; index < this.dataSource.data.length; index++) {
      const element = this.dataSource.data[index];
      
      let aula = {
        sala: element.sala.nome,
        curso: element.materiaCurso.curso.nome,
        materia: element.materiaCurso.materia.nome,
        data: this.datepipe.transform(element.data, 'dd/MM/yyyy'),
        horarioInicio: element.horarioInicio,
        horarioFim: element.horarioFim
      }
      aulas.push(aula);
    }
    this.excelService.exportAsExcelFile(aulas, 'sample');
  }

}
