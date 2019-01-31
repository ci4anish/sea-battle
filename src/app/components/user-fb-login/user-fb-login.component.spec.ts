import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFbLoginComponent } from './user-fb-login.component';

describe('UserFbLoginComponent', () => {
  let component: UserFbLoginComponent;
  let fixture: ComponentFixture<UserFbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
