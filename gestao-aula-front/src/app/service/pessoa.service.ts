import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {
  private url = '/api/pessoa';
  constructor(
    private data: DataService,
    ) { }

  salvar(pessoa): Observable<any> {
    return this.data.post(this.url + "/", pessoa);
  }

  filtrar(pessoa) {
    return this.data.post(this.url + "/filtrar", pessoa);
  }

  deletar(idPessoa) {
    return this.data.delete(this.url + "/" + idPessoa);
  }

}
