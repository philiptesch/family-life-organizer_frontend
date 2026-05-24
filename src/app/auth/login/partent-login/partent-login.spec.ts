import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartentLogin } from './partent-login';

describe('PartentLogin', () => {
  let component: PartentLogin;
  let fixture: ComponentFixture<PartentLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartentLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartentLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
