import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './addcontact/addcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';



const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contacts', component: ViewcontactComponent},
  { path: 'add', component: AddContactComponent,},

 // { path: 'update/:id', component: UpdateEmployeeComponent },
  //{ path: 'details/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
