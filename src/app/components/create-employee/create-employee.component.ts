import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  contacts: any = [];
  showRegistration = false;
  editMode = false;
  registrationForm: FormGroup;
  constructor(private readonly employeeService: EmployeeService) { }

  ngOnInit() {

    this.registrationForm = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.employeeService.fetchEmployees().subscribe(data => {
      console.log('employee Data from DB ', data);
      this.contacts = data;
    });


  }

  register() {
    this.showRegistration = true;
  }

  submitRegistration() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      const employee = this.formatEmployeeObject(this.registrationForm.value);
      this.employeeService.saveEmployee(employee).subscribe(data => {
        this.contacts = data;
        this.registrationForm.reset();
        this.showRegistration = false;
        alert('Successfully Saved');
      });
    }
  }
  cancelRegistration() {
    this.registrationForm.reset();
    this.showRegistration = false;
  }
  formatEmployeeObject(form) {
    const employeeObject = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email
    };
    return employeeObject;
  }

  deleteEmployee(item) {
    this.employeeService.deleteEmployee(item.id).subscribe(data => {
      console.log('Employee Removed successfully', data);
      this.contacts = data;
    });
  }

  editEmployee(item) {
    this.showRegistration = true;
    this.editMode = true;
    const employeeEdit = {
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      id: item.id
    };
    this.registrationForm.patchValue(employeeEdit);
  }
}
