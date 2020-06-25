import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular7';
  constructor(private readonly employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.fetchEmployees().subscribe(data => {
      console.log('employee Data from DB ', data);
    });
  }
}
