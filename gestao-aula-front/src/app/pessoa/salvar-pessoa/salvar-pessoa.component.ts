import { TipoPessoaEnum } from './../../enums/tipo-pessoa-enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-salvar-pessoa',
  templateUrl: './salvar-pessoa.component.html',
  styleUrls: ['./salvar-pessoa.component.css']
})
export class SalvarPessoaComponentDialog implements OnInit {

  tipos = TipoPessoaEnum;
  keysTipos = Object.values(TipoPessoaEnum);
  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SalvarPessoaComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Object,
    private _formBuilder: FormBuilder,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.keysTipos = Object.keys(this.tipos).filter(String);
    this.formGroup = this._formBuilder.group({
      nome: [''],
      matricula: [''],
      cpf: [''],
      tipo: []
    });
  }

  salvar(): void {
    this.pessoaService.salvar(this.formGroup.value).subscribe(_ => {
      //Toast salvar 
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }


}
