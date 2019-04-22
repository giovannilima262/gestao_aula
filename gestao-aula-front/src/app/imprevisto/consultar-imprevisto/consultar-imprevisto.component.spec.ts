import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarImprevistoComponent } from './consultar-imprevisto.component';

describe('ConsultarImprevistoComponent', () => {
  let component: ConsultarImprevistoComponent;
  let fixture: ComponentFixture<ConsultarImprevistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarImprevistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarImprevistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
