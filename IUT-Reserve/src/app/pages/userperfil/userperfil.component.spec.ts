import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserperfilComponent } from './userperfil.component';

describe('UserperfilComponent', () => {
  let component: UserperfilComponent;
  let fixture: ComponentFixture<UserperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
