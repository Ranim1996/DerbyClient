import { RequestsService } from './../../services/Activity/Request/requests.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleterequest',
  templateUrl: './deleterequest.component.html',
  styleUrls: ['./deleterequest.component.css']
})
export class DeleterequestComponent implements OnInit {

  loogedInUser = "123Test";

  constructor(
    private requestService: RequestsService,
    public dialogRef: MatDialogRef<DeleterequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  //delete user
  deleteRequest(){
    this.requestService.deleteRequest(this.data.request.id, this.loogedInUser).subscribe();
    console.log( "Request" + this.data.request.id + "User" + this.loogedInUser);

    // Close dialog
    this.dialogRef.close();

  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

}
