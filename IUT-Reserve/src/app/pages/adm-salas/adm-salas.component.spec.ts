import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSalasComponent } from './adm-salas.component';

describe('AdmSalasComponent', () => {
  let component: AdmSalasComponent;
  let fixture: ComponentFixture<AdmSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
