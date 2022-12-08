import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmperfilComponent } from './admperfil.component';

describe('AdmperfilComponent', () => {
  let component: AdmperfilComponent;
  let fixture: ComponentFixture<AdmperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
