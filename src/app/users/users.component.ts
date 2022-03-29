import { UserModel } from './../classes/UserModel';
import { UsersService } from './../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: UserModel[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = <UserModel[]>data;
     }); 
   }
}
