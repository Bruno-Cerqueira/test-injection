import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IEmployeeList } from '../interfaces/employee-interface';
import { IEmployeeType } from '../interfaces/employee-type-interface';

@Injectable({
  providedIn: 'root'
})
export class ArtEmployeeService implements IEmployeeList {
  employeeType: IEmployeeType = "art";
  employeeData$ = of([
      { id: 1, employeeType: "art", employeeName: "Avenger" }
  ]);
  constructor() {}
  list() {
    console.log("art-employee list is calling...");
  }
}
