import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IEmployeeList } from '../interfaces/employee-interface';
import { IEmployeeType } from '../interfaces/employee-type-interface';

@Injectable({
  providedIn: 'root'
})
export class ScienceEmployeeService implements IEmployeeList {
  employeeType: IEmployeeType = "science";
   employeeData$ = of([
     { id: 1, employeeType: "science", employeeName: "Harman" }
   ]);
  constructor() {}
  list() {
    console.log("science-employee list is calling...");
  }
}
