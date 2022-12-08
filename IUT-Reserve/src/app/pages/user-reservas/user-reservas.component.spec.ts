import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservasComponent } from './user-reservas.component';

describe('UserReservasComponent', () => {
  let component: UserReservasComponent;
  let fixture: ComponentFixture<UserReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
