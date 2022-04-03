import { UserModel } from './../../classes/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getUsers(){
    return this.httpClient.get('https://localhost:44311/api/User/getusers', this.httpOptions);
  }

  public getUserById(userId: any){
    return this.httpClient.get('https://localhost:44311/api/User/getuserbyId?id=' + userId, this.httpOptions);
  }

  public deleteUser(userId: any){
    return this.httpClient.delete('https://localhost:44311/api/User/deleteuser?id=' + userId, this.httpOptions);
  }

  public updateUser(user: UserModel) {
    const url = 'https://localhost:44311/api/User/updateuser/';
    return this.httpClient.put(url, user, this.httpOptions);
  }

}
