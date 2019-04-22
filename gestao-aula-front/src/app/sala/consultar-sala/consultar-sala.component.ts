import { SalvarSalaComponent } from './../salvar-sala/salvar-sala.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoSalaEnum } from 'src/app/enums/tipo-sala-enum';
import { ToastrService } from 'ngx-toastr';
import { Sala } from 'src/app/entity/sala';
import { SalaService } from 'src/app/service/sala.service';

@Component({
  selector: 'app-consultar-sala',
  templateUrl: './consultar-sala.component.html',
  styleUrls: ['./consultar-sala.component.css']
})
export class ConsultarSalaComponent implements OnInit {


  formGroup: FormGroup;
  tipos = TipoSalaEnum;
  keysTipos = Object.values(TipoSalaEnum);
  displayedColumns: string[] = ['nome', 'tipo', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private salaService: SalaService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<Sala>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      nome: [''],
      tipo: []
    });
    this.buscarSala();
  }

  buscarSala() {
    this.salaService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogSala(): void {
    const dialogRef = this.dialog.open(SalvarSalaComponent, {
      width: '480px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarSala();
    });
  }

  deletarSala(idSala) {
    this.salaService.deletar(idSala).subscribe(_ => {
      this.buscarSala();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarSala(sala: Sala) {
    const dialogRef = this.dialog.open(SalvarSalaComponent, {
      width: '480px',
      data: sala
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarSala();
    });
  }

}
