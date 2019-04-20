import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPessoaComponentDialog } from './salvar-pessoa.component';

describe('SalvarPessoaComponentDialog', () => {
  let component: SalvarPessoaComponentDialog;
  let fixture: ComponentFixture<SalvarPessoaComponentDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPessoaComponentDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPessoaComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
