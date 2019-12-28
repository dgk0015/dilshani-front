import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AddNewEmployeeDialogComponent } from './add-new-employee-dialog/add-new-employee-dialog.component';
import { DilshaniServicesService } from "../services/dilshani-services.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  drivers_list: any[];
  conducters_list: any[];
  employees: any;
  employees_list: [];

  constructor(
    private matDialog: MatDialog,
    private dilshaniService: DilshaniServicesService
  ) {
    this.drivers_list = [
      {
        id: 1,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 2,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 3,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 4,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 5,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 6,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
    ]

    this.conducters_list = [
      {
        id: 1,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 2,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 3,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 4,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 5,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
      {
        id: 6,
        image: '../../assets/imgs/Scott-Sinclair.jpg',
        name: 'Nihal',
        mob_number: 'NB-4562',
        lic_number: '123456'
      },
    ]

  }

  ngOnInit() {
    this.getEmployeeAll();
  }

  private getEmployeeAll() {
    this.dilshaniService.getEmployeesAll()
      .subscribe(response => {
        this.employees = response;
        this.employees_list = this.employees.employee;
        console.log(this.employees);
        
      })
  }

  openAddNewEmployeeDialg() {
    const dialogRef = this.matDialog.open(AddNewEmployeeDialogComponent, {
      height: '520px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployeeAll();
    })
  }

}
