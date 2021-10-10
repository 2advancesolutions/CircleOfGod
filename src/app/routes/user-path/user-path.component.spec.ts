import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPathComponent } from './user-path.component';

describe('UserPathComponent', () => {
  let component: UserPathComponent;
  let fixture: ComponentFixture<UserPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
