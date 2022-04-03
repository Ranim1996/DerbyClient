import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UserModel } from './../classes/UserModel';
import { UsersService } from './../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: UserModel[];

  constructor(private userService: UsersService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.users = <UserModel[]>data;
     }); 
   }

  //open dialog to delete
  openDialogDelete(user: UserModel): void {
    console.log(user);
    const dialogRef = this.dialog.open(DeleteuserComponent, {
      maxWidth: '50%',
      data: {user: user}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getUsers();  
    });

  }

   //open dialog to update
   openDialogUpdate(user: UserModel): void {
    console.log(user);
    const dialogRef = this.dialog.open(UpdateuserComponent, {
      maxWidth: '50%',
      data: {user: user}
    }); 

    dialogRef.afterClosed()
      .subscribe(res => {
        this.getUsers();  
    });

  }

}
