import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AulaService {
  private url = '/api/aula';
  constructor(
    private data: DataService,
  ) { }

  findAll(): Observable<any> {
    return this.data.get(this.url + "/");
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
