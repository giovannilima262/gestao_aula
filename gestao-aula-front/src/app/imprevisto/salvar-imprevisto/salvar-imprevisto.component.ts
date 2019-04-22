import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { ImprevistoEnum } from 'src/app/enums/status-imprevisto-enum';
import { Imprevisto } from 'src/app/entity/imprevisto';
import { ImprevistoService } from 'src/app/service/imprevisto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salvar-imprevisto',
  templateUrl: './salvar-imprevisto.component.html',
  styleUrls: ['./salvar-imprevisto.component.css']
})
export class SalvarImprevistoComponent implements OnInit {

  tipos = ImprevistoEnum;
  keysTipos = Object.values(ImprevistoEnum);
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarImprevistoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Imprevisto,
    private _formBuilder: FormBuilder,
    private imprevistoService: ImprevistoService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      descricao: [this.data.descricao, Validators.required],
      status: [this.data.status, Validators.required]
    });
  }

  salvar(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios')
      return;
    }
    this.imprevistoService.salvar(this.formGroup.value).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

}
