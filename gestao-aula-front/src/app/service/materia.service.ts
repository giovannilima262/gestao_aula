import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MateriaService {
  private url = '/api/materia';
  constructor(
    private data: DataService,
    ) { }

  salvar(materia): Observable<any> {
    return this.data.post(this.url + "/", materia);
  }

  filtrar(materia) {
    return this.data.post(this.url + "/filtrar", materia);
  }

  deletar(idMateria) {
    return this.data.delete(this.url + "/" + idMateria);
  }

}
