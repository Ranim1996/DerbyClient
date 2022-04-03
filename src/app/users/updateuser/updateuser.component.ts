import { UsersService } from './../../services/users/users.service';
import { UserModel } from './../../classes/UserModel';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  user: UserModel | undefined;
  id: number | undefined;

  constructor(private userService: UsersService,  
    public dialogRef: MatDialogRef<UpdateuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {

    console.log(this.data.user.id);
    this.id = this.data.user.id;
    this.userService.getUserById(this.id)
    .subscribe((data)=>{
      this.user = <UserModel>this.data;
      console.log(this.data);
    });

  }

  updateUser(){

    this.userService.updateUser(this.data.user).subscribe(
      (res: any) => {
        console.log(this.data.user.id + "updated");
      });
      this.dialogRef.close();
    }


}
