import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMateriaCursoComponent } from './consultar-materia-curso.component';

describe('ConsultarMateriaCursoComponent', () => {
  let component: ConsultarMateriaCursoComponent;
  let fixture: ComponentFixture<ConsultarMateriaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarMateriaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMateriaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
