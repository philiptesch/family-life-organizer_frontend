import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildList } from './child-list';

describe('ChildList', () => {
  let component: ChildList;
  let fixture: ComponentFixture<ChildList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
