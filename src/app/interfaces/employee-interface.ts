import { IEmployeeType } from "./employee-type-interface";


export interface IEmployeeList {
  employeeType: IEmployeeType;
  list(): void;
}