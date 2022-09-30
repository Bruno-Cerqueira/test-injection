import { Component, Inject, OnInit } from '@angular/core';
import { IEmployeeList } from 'src/app/interfaces/employee-interface';
import { EMPLOYEE_LIST } from 'src/app/services/employee-token';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  employeeList$ = null ;
  constructor(@Inject(EMPLOYEE_LIST) private employeeList: IEmployeeList[]) { }

  ngOnInit(): void {
  }

}
