import { UserModel } from './../../classes/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) 
  {
    this.LocalStorageValue()
  }

  LocalStorageValue() {
    if(localStorage.getItem("userToken") != "null"){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  localStorage.getItem("userToken") || '{}');
    };
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  token: string | undefined;

  login(email: any, password: any){

    const body = email+":"+password;
 
    console.log("LOGIN: " + body);
    return this.httpClient.post('https://localhost:44398/api/Account/Login', body, {responseType: 'text'});
  }
 
  logout(){
     this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }

  public register(data: any){
    return this.httpClient.post('https://localhost:44398/api/Account/register', data).toPromise().then(data => {
      console.log("Service:" + data);
    }); 
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  getUserIdOfLoggedIn(){
    var decoded = this.getDecodedAccessToken(localStorage.getItem("userToken") || '{}')
    var userId = decoded['jti'];
    return userId;
  }

  public getUsers(){
    return this.httpClient.get('https://localhost:44354/api/User/getusers', this.httpOptions);
  }

  public getUserById(userId: any){
    return this.httpClient.get('https://localhost:44354/api/User/getuserbyId?id=' + userId, this.httpOptions);
  }

  public deleteUser(userId: any){
    return this.httpClient.delete('https://localhost:44354/api/User/deleteuser?id=' + userId, this.httpOptions);
  }

  public updateUser(user: UserModel) {
    const url = 'https://localhost:44354/api/User/updateuser/';
    return this.httpClient.put(url, user, this.httpOptions);
  }

}
