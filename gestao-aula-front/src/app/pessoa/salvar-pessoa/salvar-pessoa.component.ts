import { Pessoa } from './../../entity/pessoa';
import { TipoPessoaEnum } from './../../enums/tipo-pessoa-enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PessoaService } from 'src/app/service/pessoa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salvar-pessoa',
  templateUrl: './salvar-pessoa.component.html',
  styleUrls: ['./salvar-pessoa.component.css']
})
export class SalvarPessoaComponent implements OnInit {

  tipos = TipoPessoaEnum;
  keysTipos = Object.values(TipoPessoaEnum);
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pessoa,
    private _formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      id: [this.data.id],
      nome: [this.data.nome, Validators.required],
      matricula: [this.data.matricula, Validators.required],
      cpf: [this.data.cpf, Validators.required],
      tipo: [this.data.tipo, Validators.required]
    });
  }

  salvar(): void {
    if (!this.formGroup.valid) {
      this.toastr.error('Campos com * são obrigatórios')
      return;
    }
    this.pessoaService.salvar(this.formGroup.value).subscribe(_ => {
      this.toastr.success('Registro salvo com sucesso!');
      this.dialogRef.close();
    }, error => {
      this.toastr.error('Error ao registrar!');
      console.log(error);
    });
  }


}
