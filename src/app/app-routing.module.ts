import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BussesComponent } from './busses/busses.component';
import { LogInComponent } from './log-in/log-in.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'busses', component: BussesComponent },
  { path: 'employees-list', component: EmployeesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
