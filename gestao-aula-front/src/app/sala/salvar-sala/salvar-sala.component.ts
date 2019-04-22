import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { TipoSalaEnum } from 'src/app/enums/tipo-sala-enum';
import { Sala } from 'src/app/entity/sala';
import { SalaService } from 'src/app/service/sala.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salvar-sala',
  templateUrl: './salvar-sala.component.html',
  styleUrls: ['./salvar-sala.component.css']
})
export class SalvarSalaComponent implements OnInit {

  tipos = TipoSalaEnum;
  keysTipos = Object.values(TipoSalaEnum);
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarSalaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sala,
    private _formBuilder: FormBuilder,
    private salaService: SalaService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
      tipo: [this.data.tipo, Validators.required]
    });
  }

  salvar(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios')
      return;
    }
    this.salaService.salvar(this.formGroup.value).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

}
