import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarImprevistoComponent } from './salvar-imprevisto.component';

describe('SalvarImprevistoComponent', () => {
  let component: SalvarImprevistoComponent;
  let fixture: ComponentFixture<SalvarImprevistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarImprevistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarImprevistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
