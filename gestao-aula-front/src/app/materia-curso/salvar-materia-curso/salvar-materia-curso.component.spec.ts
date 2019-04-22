import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarMateriaCursoComponent } from './salvar-materia-curso.component';

describe('SalvarMateriaCursoComponent', () => {
  let component: SalvarMateriaCursoComponent;
  let fixture: ComponentFixture<SalvarMateriaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMateriaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarMateriaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
