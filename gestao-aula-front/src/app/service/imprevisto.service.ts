import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ImprevistoService {
  private url = '/api/imprevisto';
  constructor(
    private data: DataService,
  ) { }

  findAll(): Observable<any> {
    return this.data.get(this.url + "/");
  }

  salvar(imprevisto): Observable<any> {
    return this.data.post(this.url + "/", imprevisto);
  }

  filtrar(imprevisto) {
    return this.data.post(this.url + "/filtrar", imprevisto);
  }

  deletar(idImprevisto) {
    return this.data.delete(this.url + "/" + idImprevisto);
  }

}
