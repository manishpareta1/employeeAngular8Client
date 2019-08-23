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
  employee: Employee = {id:0, firstName: '', lastName: '', emailId:'',active: false,
                        address:{id:0, addressLine1:'', addressLine2:'',
                        country:{id:0, city:'', state:'', country:''}}}
  submitted = false;
  
  address: Address= {id:0, addressLine1:'', addressLine2:'',
                    country:{id:0, city:'', state:'', country:''}}

  country: CountryDetail= {id:0, city:'', state:'', country:''}

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
    console.log(this.employee.address.addressLine1);
    
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    console.log("trying to print country in create emp componenet: "+this.country.city);
    this.submitted = true;
    this.employee.address = new Address();
    this.employee.address.addressLine1 = this.address.addressLine1;
    this.employee.address.addressLine2 = this.address.addressLine2;
    this.employee.address.country = new CountryDetail();
    console.log("trying to print this.employee.address.country in create emp componenet: "+this.employee.address.country);
    this.employee.address.country.city = this.country.city;
    console.log("trying to print this.employee.address.country.city in create emp componenet: "+this.employee.address.country.city);
    this.employee.address.country.state = this.country.state;
    console.log("trying to print this.employee.address.country.state in create emp componenet: "+this.employee.address.country.state);
    this.employee.address.country.country = this.country.country;
    console.log("trying to print this.employee.address.country.country in create emp componenet: "+this.employee.address.country.country);
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
