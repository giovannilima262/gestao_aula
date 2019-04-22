import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AulaPessoaService {

  private url = '/api/aula/pessoa';
  constructor(
    private data: DataService,
  ) { }

  buscarPessoaPorIdAula(id): Observable<any>  {
    return this.data.get(this.url + "/pessoas/aula/" + id);
  }

  salvar(aula): Observable<any> {
    return this.data.post(this.url + "/", aula);
  }

  filtrar(aula) {
    return this.data.post(this.url + "/filtrar", aula);
  }

  deletar(idAula) {
    return this.data.delete(this.url + "/" + idAula);
  }

}
