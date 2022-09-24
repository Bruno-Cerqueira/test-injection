import { InjectionToken } from "@angular/core";
import { IEmployeeList } from "../interfaces/employee-interface";

export const EMPLOYEE_LIST: InjectionToken<IEmployeeList> = new InjectionToken<
  IEmployeeList
>("Token for Employee list");