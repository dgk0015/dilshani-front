import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DilshaniServicesService } from "./../../services/dilshani-services.service";
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bus-daily-update-dialog',
  templateUrl: './bus-daily-update-dialog.component.html',
  styleUrls: ['./bus-daily-update-dialog.component.css']
})
export class BusDailyUpdateDialogComponent implements OnInit {

  dailyUpdateForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private dilshaniService: DilshaniServicesService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) { }

  ngOnInit() {
    this.initForm();
    this.getBusTurns();
  }

  initForm() {
    this.dailyUpdateForm = this.formBuilder.group({
      driverName: ['', Validators.required],
      driverSalary: ['', Validators.required],
      conductorName: ['', Validators.required],
      conductorSalary: ['', Validators.required],
      fuel: ['', Validators.required],
      additionalExpense: ['', Validators.required],
      insuaranceExpiry: [''],
      licenseExpiry: [''],
      tires: [''],
      service: ['']
    })
  }

  onSubmit() {
    this.dilshaniService.saveDailyUpdate(this.dailyUpdateForm.value)
      .subscribe(response => {
        console.log(response);
        
      })
  }

  getBusTurns() {
    console.log(this.dialogData);
    
    // this.dilshaniService.getBusTurns()
  }

}
