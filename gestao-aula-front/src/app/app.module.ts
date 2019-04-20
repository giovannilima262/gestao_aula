import { DataService } from './service/data.service';
import { SalvarPessoaComponentDialog } from './pessoa/salvar-pessoa/salvar-pessoa.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarPessoaComponent,
    SalvarPessoaComponentDialog,
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
    
  ],
  providers: [
    PessoaService,
    DataService    
  ],
  bootstrap: [AppComponent],
  entryComponents: [SalvarPessoaComponentDialog]
})
export class AppModule { }
