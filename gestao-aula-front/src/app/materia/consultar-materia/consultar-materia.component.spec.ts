import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMateriaComponent } from './consultar-materia.component';

describe('ConsultarMateriaComponent', () => {
  let component: ConsultarMateriaComponent;
  let fixture: ComponentFixture<ConsultarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
