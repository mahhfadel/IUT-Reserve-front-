import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadraoreservasComponent } from './upadraoreservas.component';

describe('UpadraoreservasComponent', () => {
  let component: UpadraoreservasComponent;
  let fixture: ComponentFixture<UpadraoreservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadraoreservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadraoreservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
