import { TestBed } from '@angular/core/testing';

import { ScienceEmployeeService } from './science-employee.service';

describe('ScienceEmployeeService', () => {
  let service: ScienceEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScienceEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
