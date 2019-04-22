import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSalaComponent } from './consultar-sala.component';

describe('ConsultarSalaComponent', () => {
  let component: ConsultarSalaComponent;
  let fixture: ComponentFixture<ConsultarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
