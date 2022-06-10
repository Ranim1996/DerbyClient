import { UsersService } from './../services/users/users.service';
import { UserModel } from './../classes/UserModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;

  token: string | undefined;
  loggedIn: boolean | undefined; 
  isLoginError : boolean = false; 
  user: UserModel | undefined;
  
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.readLocalStorageValue() != null){
      this.loggedIn= true;
      this.router.navigate(['Derby/users']);
    }else{
      this.loggedIn = false;
    } 
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  OnSubmit(email: any, password: any){

    var credintials = {email: email, password: password};
    this.userService.login(credintials) 
    .subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('userToken', res);
        location.reload();
        this.router.navigate(['Derby/activity']);
      },
      
      (error: Response) => {
        if(error.status === 404){
          console.log("not found");
          this.isLoginError = true;
        }
      }
    );
  }

  readLocalStorageValue() {
    return localStorage.getItem('userToken');
  }

}
