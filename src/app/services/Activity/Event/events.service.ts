import { EventModel } from './../../../classes/EventModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { } 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getEvents(){
    return this.httpClient.get('https://localhost:44324/api/Event/getevents', this.httpOptions);
  }

  public getEventsByUserId(userId: any){
    return this.httpClient.get('https://localhost:44324/api/Event/geteventsbyUserId?userId=' + userId, this.httpOptions);
  }

  public getEventById(eventId: any){
    return this.httpClient.get('https://localhost:44324/api/Event/geteventsbyId?eventId=' + eventId, this.httpOptions);
  }

  public deleteEvent(eventId: any, userId: any){
    return this.httpClient.delete('https://localhost:44324/api/Event/deleteEvent?eventId=' + eventId + '&userId=' + userId, this.httpOptions);
  }

  public updateEvent(event: EventModel) {
    const url = 'https://localhost:44324/api/Event/updateevent';
    return this.httpClient.put(url, event, this.httpOptions);
  }

  public addEvent(event: EventModel) {
    const url = 'https://localhost:44324/api/Event/addevent'; 
    return this.httpClient.put(url, event, this.httpOptions);
  }
}
