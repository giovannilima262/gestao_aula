import { DataService } from './service/data.service';
import { SalvarPessoaComponent } from './pessoa/salvar-pessoa/salvar-pessoa.component';
import { ConsultarPessoaComponent } from './pessoa/consultar-pessoa/consultar-pessoa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { PessoaService } from './service/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { ConsultarMateriaComponent } from './materia/consultar-materia/consultar-materia.component';
import { SalvarMateriaComponent } from './materia/salvar-materia/salvar-materia.component';
import { ConsultarCursoComponent } from './curso/consultar-curso/consultar-curso.component';
import { SalvarCursoComponent } from './curso/salvar-curso/salvar-curso.component';
import { MateriaService } from './service/materia.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPessoaComponent,
    SalvarPessoaComponent,
    ConsultarMateriaComponent,
    SalvarMateriaComponent,
    ConsultarCursoComponent,
    SalvarCursoComponent,
  ],
  imports: [
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatIconModule

  ],
  providers: [
    PessoaService,
    DataService,
    MateriaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SalvarPessoaComponent,
    SalvarMateriaComponent
  ]
})
export class AppModule { }
