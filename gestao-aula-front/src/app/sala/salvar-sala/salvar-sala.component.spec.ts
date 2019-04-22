import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarSalaComponent } from './salvar-sala.component';

describe('SalvarSalaComponent', () => {
  let component: SalvarSalaComponent;
  let fixture: ComponentFixture<SalvarSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
