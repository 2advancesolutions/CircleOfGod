import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponentRoute } from './landing.component';

describe('LandingComponent', () => {
  let component: LandingComponentRoute;
  let fixture: ComponentFixture<LandingComponentRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingComponentRoute ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponentRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
