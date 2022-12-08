import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasAdmComponent } from './reservas-adm.component';

describe('ReservasAdmComponent', () => {
  let component: ReservasAdmComponent;
  let fixture: ComponentFixture<ReservasAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
