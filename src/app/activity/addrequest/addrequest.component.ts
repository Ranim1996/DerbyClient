import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestModel } from 'src/app/classes/RequestModel';
import { RequestsService } from 'src/app/services/Activity/Request/requests.service';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.css']
})
export class AddrequestComponent implements OnInit {

  requestToAdd:{} | undefined;
  request: RequestModel = new RequestModel("123Test", "", "");

  constructor(private requestService: RequestsService,  
    public dialogRef: MatDialogRef<AddrequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {
  }

  onSubmit(request: any){ 

    this.requestToAdd = { 
      "userId": "123Test",
      "title": request.title,
      "description": request.description,
  } 

      this.requestService.addRequest(<JSON>this.requestToAdd);
      console.log("Added" + this.requestToAdd);

      this.dialogRef.close();
  }

}
