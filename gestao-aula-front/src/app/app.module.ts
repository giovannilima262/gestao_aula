import { ExcelService } from './service/excel-service';
import { DataService } from './service/data.service';
import { SalvarPessoaComponent } from './pessoa/salvar-pessoa/salvar-pessoa.component';
import { ConsultarPessoaComponent } from './pessoa/consultar-pessoa/consultar-pessoa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { CursoService } from './service/curso.service';
import { ConsultarSalaComponent } from './sala/consultar-sala/consultar-sala.component';
import { SalvarSalaComponent } from './sala/salvar-sala/salvar-sala.component';
import { SalaService } from './service/sala.service';
import { ConsultarImprevistoComponent } from './imprevisto/consultar-imprevisto/consultar-imprevisto.component';
import { SalvarImprevistoComponent } from './imprevisto/salvar-imprevisto/salvar-imprevisto.component';
import { ImprevistoService } from './service/imprevisto.service';
import { ConsultarMateriaCursoComponent } from './materia-curso/consultar-materia-curso/consultar-materia-curso.component';
import { SalvarMateriaCursoComponent } from './materia-curso/salvar-materia-curso/salvar-materia-curso.component';
import { MateriaCursoService } from './service/materia-curso.service';
import { ConsultarAulaComponent } from './aula/consultar-aula/consultar-aula.component';
import { SalvarAulaComponent } from './aula/salvar-aula/salvar-aula.component';
import { AulaService } from './service/aula.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { AngularWebStorageModule } from 'angular-web-storage';
import { registerLocaleData } from '@angular/common';
import { ConsultarAulaPessoaComponent } from './aula-pessoa/consultar-aula-pessoa/consultar-aula-pessoa.component';
import { AulaPessoaService } from './service/aula-pessoa.service';
import {saveAs} from 'file-saver';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPessoaComponent,
    SalvarPessoaComponent,
    ConsultarMateriaComponent,
    SalvarMateriaComponent,
    ConsultarCursoComponent,
    SalvarCursoComponent,
    ConsultarSalaComponent,
    SalvarSalaComponent,
    ConsultarImprevistoComponent,
    SalvarImprevistoComponent,
    ConsultarMateriaCursoComponent,
    SalvarMateriaCursoComponent,
    ConsultarAulaComponent,
    SalvarAulaComponent,
    ConsultarAulaPessoaComponent,
    
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
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularWebStorageModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    PessoaService,
    DataService,
    MateriaService,
    CursoService,
    SalaService,
    ImprevistoService,
    MateriaCursoService,
    AulaService,
    AulaPessoaService,
    ExcelService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SalvarPessoaComponent,
    SalvarMateriaComponent,
    SalvarCursoComponent,
    SalvarSalaComponent,
    SalvarImprevistoComponent,
    SalvarMateriaCursoComponent,
    SalvarAulaComponent
  ]
})
export class AppModule { }
