import { TestBed } from '@angular/core/testing';

import { AllowExitListGuard } from './allow-exit-list.guard';

describe('AllowExitListGuard', () => {
  let guard: AllowExitListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowExitListGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
