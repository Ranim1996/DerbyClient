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

  request: RequestModel | undefined;
  loggedInUser = "123Test";

  constructor(private requestService: RequestsService,  
    public dialogRef: MatDialogRef<AddrequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {
  }

  addRequest(){

    this.requestService.addRequest(this.data.request).subscribe(
      (res: any) => {
        console.log(this.data.request.id + "added");
      });
      this.dialogRef.close();
    }
}
