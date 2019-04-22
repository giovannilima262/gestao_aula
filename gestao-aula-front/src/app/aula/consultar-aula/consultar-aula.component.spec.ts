import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAulaComponent } from './consultar-aula.component';

describe('ConsultarAulaComponent', () => {
  let component: ConsultarAulaComponent;
  let fixture: ComponentFixture<ConsultarAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
