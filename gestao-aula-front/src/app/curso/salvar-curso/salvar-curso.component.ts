import { Curso } from 'src/app/entity/curso';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CursoService } from './../../service/curso.service';
import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salvar-curso',
  templateUrl: './salvar-curso.component.html',
  styleUrls: ['./salvar-curso.component.css']
})
export class SalvarCursoComponent implements OnInit {
 
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso,
    private _formBuilder: FormBuilder,
    private cursoService: CursoService,
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
    this.cursoService.salvar(this.formGroup.value).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }

}
