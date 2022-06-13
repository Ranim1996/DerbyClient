import { RequestModel } from './../../../classes/RequestModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpClient: HttpClient) { } 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getRequests(){
    return this.httpClient.get('https://localhost:44324/api/Request/getrequests', this.httpOptions);
  }

  public getRequestsByUserId(userId: any){
    return this.httpClient.get('https://localhost:44324/api/Request/getrequestsbyUserId?id=' + userId, this.httpOptions);
  }

  public getRequestById(requestId: any){
    return this.httpClient.get('https://localhost:44324/api/Request/getrequestsbyId?id=' + requestId, this.httpOptions);
  }

  public deleteRequest(requestId: any, userId: any){
    return this.httpClient.delete('https://localhost:44324/api/Request/deleterequest?requestId=' + requestId + '&userId=' + userId, this.httpOptions);
  }

  public updateRequest(request: RequestModel) {
    const url = 'https://localhost:44324/api/Request/updaterequest'; 
    return this.httpClient.put(url, request, this.httpOptions); 
  }

  public addRequest(request: any) { 
    var body = JSON.stringify(request);
    return this.httpClient.post('https://localhost:44324/api/Request/addrequest', body, this.httpOptions).toPromise().then(data => {
      console.log("Add Request:" + data);
    }); 
  }

}
