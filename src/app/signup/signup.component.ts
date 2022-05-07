import { UsersService } from './../services/users/users.service';
import { UserModel } from './../classes/UserModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userToAdd:{} | undefined;
  user: UserModel | undefined;

  constructor(
    private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
  }

  public inputValidator(event: any) {
    const pattern = /^[a-zA-Z]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
    }
  }

  onSubmitRegistration(user: any){

    console.log("On register button");

    this.userToAdd = {
      "firstName": user.firstName,
      "lastName": user.lastName,
      "password": user.password, 
      "emailAddress": user.emailAddress
  } 

      this.userService.register(<JSON>this.userToAdd);
      console.log("Added" + this.userToAdd);
      this.router.navigate(['Derby']);

  }

}
