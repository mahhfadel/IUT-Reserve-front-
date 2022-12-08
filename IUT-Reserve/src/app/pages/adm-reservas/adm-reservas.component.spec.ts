import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmReservasComponent } from './adm-reservas.component';

describe('AdmReservasComponent', () => {
  let component: AdmReservasComponent;
  let fixture: ComponentFixture<AdmReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
