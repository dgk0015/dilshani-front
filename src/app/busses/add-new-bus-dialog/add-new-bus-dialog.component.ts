import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-bus-dialog',
  templateUrl: './add-new-bus-dialog.component.html',
  styleUrls: ['./add-new-bus-dialog.component.css']
})
export class AddNewBusDialogComponent implements OnInit {

  public fileData;
  busNumber: Text = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    public dialogRef: MatDialogRef<AddNewBusDialogComponent>,
    private http: HttpClient
  ) { }

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

  onSubmit(number) {
    const formData = new FormData();
    for(var i =0; i < this.fileData.length; i++) {
      formData.append('image', this.fileData[i], this.fileData[i].name);
    }
    
    formData.append("plateNumber", number)
     
    this.fileUploadProgress = '0%';
 
    this.http.post('https://buswebp.herokuapp.com/bus/create', formData, {
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

  ngOnInit() {
  }

}
