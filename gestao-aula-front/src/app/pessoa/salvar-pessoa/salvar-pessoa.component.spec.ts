import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPessoaComponent } from './salvar-pessoa.component';

describe('SalvarPessoaComponent', () => {
  let component: SalvarPessoaComponent;
  let fixture: ComponentFixture<SalvarPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
