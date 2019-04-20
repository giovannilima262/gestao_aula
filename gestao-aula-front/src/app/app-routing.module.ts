import { ConsultarPessoaComponent } from './pessoa/consultar-pessoa/consultar-pessoa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarMateriaComponent } from './materia/consultar-materia/consultar-materia.component';

const routes: Routes = [
  { path: 'consultar/pessoa', component: ConsultarPessoaComponent },
  { path: 'consultar/materia', component: ConsultarMateriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
