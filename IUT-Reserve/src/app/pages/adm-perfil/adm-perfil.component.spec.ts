import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPerfilComponent } from './adm-perfil.component';

describe('AdmPerfilComponent', () => {
  let component: AdmPerfilComponent;
  let fixture: ComponentFixture<AdmPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
