import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Materia } from 'src/app/entity/materia';
import { MateriaService } from 'src/app/service/materia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salvar-materia',
  templateUrl: './salvar-materia.component.html',
  styleUrls: ['./salvar-materia.component.css']
})
export class SalvarMateriaComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Materia,
    private _formBuilder: FormBuilder,
    private materiaService: MateriaService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
    });
  }

  salvar(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios')
      return;
    }
    this.materiaService.salvar(this.formGroup.value).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

}
