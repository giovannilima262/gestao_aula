import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAulaPessoaComponent } from './consultar-aula-pessoa.component';

describe('ConsultarAulaPessoaComponent', () => {
  let component: ConsultarAulaPessoaComponent;
  let fixture: ComponentFixture<ConsultarAulaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAulaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAulaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
