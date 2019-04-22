import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SalaService {
  private url = '/api/sala';
  constructor(
    private data: DataService,
  ) { }

  findAll(): Observable<any> {
    return this.data.get(this.url + "/");
  }

  salvar(sala): Observable<any> {
    return this.data.post(this.url + "/", sala);
  }

  filtrar(sala) {
    return this.data.post(this.url + "/filtrar", sala);
  }

  deletar(idSala) {
    return this.data.delete(this.url + "/" + idSala);
  }

}
