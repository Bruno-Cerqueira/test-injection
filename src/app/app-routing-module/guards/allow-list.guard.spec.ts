import { TestBed } from '@angular/core/testing';

import { AllowListGuard } from './allow-list.guard';

describe('AllowListGuard', () => {
  let guard: AllowListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
