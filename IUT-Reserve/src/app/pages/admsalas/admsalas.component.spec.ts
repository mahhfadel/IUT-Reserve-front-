import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmsalasComponent } from './admsalas.component';

describe('AdmsalasComponent', () => {
  let component: AdmsalasComponent;
  let fixture: ComponentFixture<AdmsalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmsalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmsalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
