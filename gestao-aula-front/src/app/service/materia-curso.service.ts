import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MateriaCursoService {
  private url = '/api/materia/curso';
  constructor(
    private data: DataService,
  ) { }

  findByIdCurso(idCurso): Observable<any> {
    return this.data.get(this.url + "/idCurso/" + idCurso);
  }

  findAll(): Observable<any> {
    return this.data.get(this.url + "/");
  }

  salvar(materiaCurso): Observable<any> {
    return this.data.post(this.url + "/", materiaCurso);
  }

  filtrar(materiaCurso) {
    return this.data.post(this.url + "/filtrar", materiaCurso);
  }

  deletar(idMateriaCurso) {
    return this.data.delete(this.url + "/" + idMateriaCurso);
  }

}
