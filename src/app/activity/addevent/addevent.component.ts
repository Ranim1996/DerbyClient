import { EventsService } from './../../services/Activity/Event/events.service';
import { Component, Inject, OnInit } from '@angular/core';
import { EventModel } from 'src/app/classes/EventModel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  event: EventModel | undefined;
  loggedInUser = "123Test";

  constructor(private eventService: EventsService,  
    public dialogRef: MatDialogRef<AddeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {
  }

  addEvent(){

    this.eventService.addEvent(this.data.event).subscribe(
      (res: any) => {
        console.log(this.data.event.id + "added");
      });
      this.dialogRef.close();
    }

}
