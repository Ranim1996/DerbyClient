import { EventsService } from './../../services/Activity/Event/events.service';
import { EventModel } from 'src/app/classes/EventModel';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {

  event: EventModel | undefined;
  id: number | undefined;

  constructor(private eventService: EventsService,  
    public dialogRef: MatDialogRef<UpdateeventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {

    console.log(this.data.event.id);
    this.id = this.data.event.id;
    this.eventService.getEventById(this.id)
    .subscribe((data)=>{
      this.event = <EventModel>this.data;
      console.log(this.data);
    });

  }

  updateEvent(){
    this.eventService.updateEvent(this.data.event).subscribe(
      (res: any) => {
        console.log(this.data.event.id + "updated");
      });
      this.dialogRef.close(); 
    }

}
