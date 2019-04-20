import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarMateriaComponent } from './salvar-materia.component';

describe('SalvarMateriaComponent', () => {
  let component: SalvarMateriaComponent;
  let fixture: ComponentFixture<SalvarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
