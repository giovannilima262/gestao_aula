import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarCursoComponent } from './salvar-curso.component';

describe('SalvarCursoComponent', () => {
  let component: SalvarCursoComponent;
  let fixture: ComponentFixture<SalvarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
