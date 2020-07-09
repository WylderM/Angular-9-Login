import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPinComponent } from './auth-pin.component';

describe('AuthPinComponent', () => {
  let component: AuthPinComponent;
  let fixture: ComponentFixture<AuthPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
