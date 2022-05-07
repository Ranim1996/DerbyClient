import { RequestsService } from './../services/Activity/Request/requests.service';
import { RequestModel } from './../classes/RequestModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleterequestComponent } from './deleterequest/deleterequest.component';
import { UpdaterequestComponent } from './updaterequest/updaterequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  requests!: RequestModel[];
  userId!: any;

  loogedInUser = "123Test";

  constructor(private requestService: RequestsService,
    public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests(){
    this.requestService.getRequestsByUserId(this.loogedInUser).subscribe((data)=>{
      console.log(data);
      this.requests = <RequestModel[]>data;
     }); 
   }

   //open dialog to delete
   openDialogDelete(request: RequestModel): void {
    console.log(request);
    const dialogRef = this.dialog.open(DeleterequestComponent, {
      maxWidth: '50%',
      data: {request: request}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getRequests();  
    });

  }

   //open dialog to update
   openDialogUpdate(request: RequestModel): void {
    console.log(request);
    const dialogRef = this.dialog.open(UpdaterequestComponent, {
      maxWidth: '50%',
      data: {request: request}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getRequests();  
    });

  }

  //open dialog to add 
  openDialogAdd(request: RequestModel): void {
    console.log(request);
    const dialogRef = this.dialog.open(AddrequestComponent, {
      maxWidth: '50%',
      data: {request: request}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getRequests();  
    });

  }

}
