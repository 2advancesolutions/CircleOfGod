import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSignUpComponent } from './route-sign-up.component';

describe('RouteSignUpComponent', () => {
  let component: RouteSignUpComponent;
  let fixture: ComponentFixture<RouteSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
