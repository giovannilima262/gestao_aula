import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CursoService {
  private url = '/api/curso';
  constructor(
    private data: DataService,
  ) { }

  findAll(): Observable<any> {
    return this.data.get(this.url + "/");
  }

  salvar(curso): Observable<any> {
    return this.data.post(this.url + "/", curso);
  }

  filtrar(curso) {
    return this.data.post(this.url + "/filtrar", curso);
  }

  deletar(idCurso) {
    return this.data.delete(this.url + "/" + idCurso);
  }

}
