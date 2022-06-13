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
 
  eventToAdd:{} | undefined;
  event: EventModel = new EventModel("123Test", "", "", new Date(), "");

  constructor(private eventService: EventsService,  
    public dialogRef: MatDialogRef<AddeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {
  }

  onSubmit(event: any){ 

    this.eventToAdd = { 
      "userId": "123Test",
      "title": event.title,
      "description": event.description,
      "when": event.when, 
      "where": event.where
  } 

      this.eventService.addEvent(<JSON>this.eventToAdd);
      console.log("Added" + this.eventToAdd);

      this.dialogRef.close();
  }

}
