import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Address } from '../address';
import { CountryDetail } from '../countrydetail';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  //employee: Employee;
  //initialized employee so that null values are sent to ui when loaded for the first time
  employee: Employee = {id:0, firstName: '', lastName: '', emailId:'',active: false,
                        address:{id:0, addressLine1:'', addressLine2:'',
                        country:{id:0, city:'', state:'', country:''}}}
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    //this.employee = new Employee();
    
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
     this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.employee.address = new Address();
    this.employee.address.country = new CountryDetail();
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
