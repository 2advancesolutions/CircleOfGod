import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdsComponent } from './route-ads.component';

describe('RouteAdsComponent', () => {
  let component: RouteAdsComponent;
  let fixture: ComponentFixture<RouteAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
