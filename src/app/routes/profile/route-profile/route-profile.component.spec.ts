import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProfileComponent } from './route-profile.component';

describe('RouteProfileComponent', () => {
  let component: RouteProfileComponent;
  let fixture: ComponentFixture<RouteProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
