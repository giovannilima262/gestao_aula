import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarAulaComponent } from './salvar-aula.component';

describe('SalvarAulaComponent', () => {
  let component: SalvarAulaComponent;
  let fixture: ComponentFixture<SalvarAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
