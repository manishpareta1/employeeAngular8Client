import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ApiConstants } from './api.constants';



const routes: Routes = [
  { path: '', redirectTo: ApiConstants.EMP_HOME_ROUTE, pathMatch: 'full' },
  { path: ApiConstants.EMP_HOME_ROUTE, component: EmployeeListComponent },
  { path: ApiConstants.EMP_ADD_ROUTE, component: CreateEmployeeComponent },
  { path:  ApiConstants.EMP_DETAIL_BY_ID_ROUTE, component: EmployeeDetailsComponent },
  { path:  ApiConstants.EMP_UPDATE_ROUTE, component: UpdateEmployeeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
