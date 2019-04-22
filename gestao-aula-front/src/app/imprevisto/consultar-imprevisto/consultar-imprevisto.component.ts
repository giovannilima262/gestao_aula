import { SalvarImprevistoComponent } from './../salvar-imprevisto/salvar-imprevisto.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImprevistoEnum } from 'src/app/enums/status-imprevisto-enum';
import { ImprevistoService } from 'src/app/service/imprevisto.service';
import { ToastrService } from 'ngx-toastr';
import { Imprevisto } from 'src/app/entity/imprevisto';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-consultar-imprevisto',
  templateUrl: './consultar-imprevisto.component.html',
  styleUrls: ['./consultar-imprevisto.component.css']
})
export class ConsultarImprevistoComponent implements OnInit {

  formGroup: FormGroup;
  tipos = ImprevistoEnum;
  keysTipos = Object.values(ImprevistoEnum);
  displayedColumns: string[] = ['descricao', 'status', 'acoes'];

  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private imprevistoService: ImprevistoService,
    private toastr: ToastrService,
  ) { }

  dataSource = new MatTableDataSource<Imprevisto>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      descricao: [''],
      status: []
    });
    this.buscarImprevisto();
  }

  buscarImprevisto() {
    this.imprevistoService.filtrar(this.formGroup.value).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;      
    }, error => {
      this.toastr.error('Error ao buscar registro!');
      console.log(error);
    });
  }

  dialogImprevisto(): void {
    const dialogRef = this.dialog.open(SalvarImprevistoComponent, {
      width: '480px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarImprevisto();
    });
  }

  deletarImprevisto(idImprevisto) {
    this.imprevistoService.deletar(idImprevisto).subscribe(_ => {
      this.buscarImprevisto();
      this.toastr.success('Registro deletado com sucesso!');
    }, error => {
      this.toastr.error('Error ao deletar registro!');
      console.log(error);
    });
  }

  editarImprevisto(imprevisto: Imprevisto) {
    const dialogRef = this.dialog.open(SalvarImprevistoComponent, {
      width: '480px',
      data: imprevisto
    });
    dialogRef.afterClosed().subscribe(_ => {
      this.buscarImprevisto();
    });
  }


}
