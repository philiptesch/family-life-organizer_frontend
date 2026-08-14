import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAvatar } from './child-avatar';

describe('ChildAvatar', () => {
  let component: ChildAvatar;
  let fixture: ComponentFixture<ChildAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
