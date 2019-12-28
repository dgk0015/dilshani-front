import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussesComponent } from './busses/busses.component';
import { EmployeesComponent } from './employees/employees.component';
import { BookingsComponent } from './bookings/bookings.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ReprtsComponent } from './reprts/reprts.component';
import { AddNewBusDialogComponent } from './busses/add-new-bus-dialog/add-new-bus-dialog.component';
import { BusDailyUpdateDialogComponent } from './busses/bus-daily-update-dialog/bus-daily-update-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatIconModule, MatCheckboxModule, MatButtonModule,
  MatDialogModule, MatInputModule, MatToolbarModule, MatDatepickerModule, MatTooltipModule
} from '@angular/material';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewEmployeeDialogComponent } from './employees/add-new-employee-dialog/add-new-employee-dialog.component';
import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    AppComponent,
    BussesComponent,
    EmployeesComponent,
    BookingsComponent,
    SchedulesComponent,
    ReprtsComponent,
    AddNewBusDialogComponent,
    BusDailyUpdateDialogComponent,
    LogInComponent,
    HeaderComponent,
    AddNewEmployeeDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    // MatMomentDateModule,
    MatTooltipModule
  ],
  providers: [
    MatDatepickerModule
  ],
  entryComponents: [
    AddNewBusDialogComponent,
    BusDailyUpdateDialogComponent,
    AddNewEmployeeDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
