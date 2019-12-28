import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-employee-dialog',
  templateUrl: './add-new-employee-dialog.component.html',
  styleUrls: ['./add-new-employee-dialog.component.css']
})
export class AddNewEmployeeDialogComponent implements OnInit {

  public fileData;
  busNumber: Text = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<AddNewEmployeeDialogComponent>,
  ) { }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files;
    // this.busNumber = <Text>fileInput.target.files[1];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData[0]);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmit(name, role, licNumber, mobNumber) {
    const formData = new FormData();
    for(var i =0; i < this.fileData.length; i++) {
      formData.append('image', this.fileData[i], this.fileData[i].name);
    }
    
    formData.append("name", name);
    formData.append("role", role);
    formData.append("licenseNumber", licNumber);
    formData.append("mobile", mobNumber);
     
    this.fileUploadProgress = '0%';
 
    this.http.post('https://buswebp.herokuapp.com/employee/create', formData, {
      reportProgress: true,
      observe: 'events'   
    })
    .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);          
        this.closeDialog();
      }
         
    }) 
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

}
