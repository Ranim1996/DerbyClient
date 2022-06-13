import { UpdateeventComponent } from './updateevent/updateevent.component';
import { AddeventComponent } from './addevent/addevent.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { RequestsService } from './../services/Activity/Request/requests.service';
import { RequestModel } from './../classes/RequestModel';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleterequestComponent } from './deleterequest/deleterequest.component';
import { UpdaterequestComponent } from './updaterequest/updaterequest.component';
import { AddrequestComponent } from './addrequest/addrequest.component';
import { EventModel } from '../classes/EventModel';
import { EventsService } from '../services/Activity/Event/events.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  requests!: RequestModel[];
  events!: EventModel[];
  userId!: any;

  loggedInUser = "123Test";

  event: EventModel = new EventModel(this.loggedInUser, "", "", new Date(), "");
  request: RequestModel = new RequestModel(this.loggedInUser, "", "");

  constructor(private requestService: RequestsService,
    private eventService: EventsService,
    public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.getRequests();
    this.getEvents();
  }

  getEvents(){
    this.eventService.getEventsByUserId(this.loggedInUser).subscribe((data)=>{
      console.log(data);
      this.events = <EventModel[]>data;
     }); 
   }

  getRequests(){
    this.requestService.getRequestsByUserId(this.loggedInUser).subscribe((data)=>{
      console.log(data);
      this.requests = <RequestModel[]>data;
     }); 
   }

   //open dialog to delete request
   openDialogDeleteRequest(request: RequestModel): void {
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

   //open dialog to update request
   openDialogUpdateRequest(request: RequestModel): void {
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

  //open dialog to add request
  openDialogAddRequest(request: RequestModel): void {
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

  //open dialog to delete event
  openDialogDeleteEvent(event: EventModel): void {
    console.log(event);
    const dialogRef = this.dialog.open(DeleteeventComponent, {
      maxWidth: '50%',
      data: {event: event}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getEvents();  
    });

  }
  
  //open dialog to update event
  openDialogUpdateEvent(event: EventModel): void {
    console.log(event);
    const dialogRef = this.dialog.open(UpdateeventComponent, {
      maxWidth: '50%',
      data: {event: event}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getEvents();  
    });
  
  }
  
  //open dialog to add event
  openDialogAddEvent(event: EventModel): void {
    console.log(event);
    const dialogRef = this.dialog.open(AddeventComponent, {
      maxWidth: '50%',
      data: {event: event}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getEvents();  
    });
  
  }

}
