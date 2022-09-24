import { TestBed } from '@angular/core/testing';

import { ArtEmployeeService } from './art-employee.service';

describe('ArtEmployeeService', () => {
  let service: ArtEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
