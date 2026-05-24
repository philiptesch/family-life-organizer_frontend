import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLogin } from './child-login';

describe('ChildLogin', () => {
  let component: ChildLogin;
  let fixture: ComponentFixture<ChildLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
