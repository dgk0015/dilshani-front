import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddNewBusDialogComponent } from "./add-new-bus-dialog/add-new-bus-dialog.component";
import { BusDailyUpdateDialogComponent } from "./bus-daily-update-dialog/bus-daily-update-dialog.component";
import { DilshaniServicesService } from "../services/dilshani-services.service";

@Component({
  selector: 'app-busses',
  templateUrl: './busses.component.html',
  styleUrls: ['./busses.component.css']
})
export class BussesComponent implements OnInit {

  public bus: any;
  public bus_list: [];

  constructor(
    private matDialog: MatDialog,
    private dilshaniService: DilshaniServicesService
  ) {

  }

  ngOnInit() {
    this.getBusAll();
  }

  private getBusAll() {
    this.dilshaniService.getBusAll()
      .subscribe(response => {
        this.bus = response;
        this.bus_list = this.bus.bus;
        console.log(this.bus_list);
        
      })
  }

  openAddNewBusDialg() {
    const dialogRef = this.matDialog.open(AddNewBusDialogComponent, {
      height: '320px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBusAll();
    })
  }

  openDailyUpdateDialog(bus) {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(BusDailyUpdateDialogComponent, {
      height: '540px',
      width: '1100px',
      data: {
        busObj: bus
      }
    });
  }

}
