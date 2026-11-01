import { TestBed } from '@angular/core/testing';

import { Child } from './ChildService';

describe('Child', () => {
  let service: Child;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Child);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
