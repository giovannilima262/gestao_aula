import { ConsultarAulaPessoaComponent } from './aula-pessoa/consultar-aula-pessoa/consultar-aula-pessoa.component';
import { ConsultarAulaComponent } from './aula/consultar-aula/consultar-aula.component';
import { ConsultarImprevistoComponent } from './imprevisto/consultar-imprevisto/consultar-imprevisto.component';
import { ConsultarSalaComponent } from './sala/consultar-sala/consultar-sala.component';
import { ConsultarCursoComponent } from './curso/consultar-curso/consultar-curso.component';
import { ConsultarPessoaComponent } from './pessoa/consultar-pessoa/consultar-pessoa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarMateriaComponent } from './materia/consultar-materia/consultar-materia.component';
import { ConsultarMateriaCursoComponent } from './materia-curso/consultar-materia-curso/consultar-materia-curso.component';

const routes: Routes = [
  { path: 'consultar/pessoa', component: ConsultarPessoaComponent },
  { path: 'consultar/materia', component: ConsultarMateriaComponent },
  { path: 'consultar/curso', component: ConsultarCursoComponent },
  { path: 'consultar/sala', component: ConsultarSalaComponent },
  { path: 'consultar/imprevisto', component: ConsultarImprevistoComponent },
  { path: 'consultar/materia/curso', component: ConsultarMateriaCursoComponent },
  { path: 'consultar/aula', component: ConsultarAulaComponent },
  { path: 'consultar/aula/pessoa', component: ConsultarAulaPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
