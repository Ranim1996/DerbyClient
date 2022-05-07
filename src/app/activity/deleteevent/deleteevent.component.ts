import { EventsService } from './../../services/Activity/Event/events.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent implements OnInit {

  loggedInUser = "123Test";

  constructor(
    private evetService: EventsService,
    public dialogRef: MatDialogRef<DeleteeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  //delete event
  deleteEvent(){
    this.evetService.deleteEvent(this.data.event.id, this.loggedInUser).subscribe();
    console.log( "Event" + this.data.event.id + "User" + this.loggedInUser);

    // Close dialog
    this.dialogRef.close();

  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

}
